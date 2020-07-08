import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';
import onClickOutside from 'react-onclickoutside';

import NestedDropdownMenuHeader from './components/NestedDropdownMenuHeader';
import NestedDropdownMenuFilter from './components/NestedDropdownMenuFilter';
import NestedDropdownMenuList from './components/NestedDropdownMenuList';

class NestedDropdownMenu extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeOnOutsideClick: PropTypes.bool,
    children: PropTypes.element.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        allowAddNew: PropTypes.bool,
        onAddNewClick: PropTypes.func,
        onClick: PropTypes.func,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
            onItemClick: PropTypes.func,
          }),
        ),
      }),
    ).isRequired,
    onItemClick: PropTypes.func.isRequired,
    onAddNewClick: PropTypes.func,
    placement: PropTypes.string,
  };

  static defaultProps = {
    onAddNewClick: undefined,
    isOpen: false,
    closeOnOutsideClick: true,
    allowAddNew: false,
    placement: 'bottom',
  };

  state = {
    selectedPath: [],
    showBackBtn: false,
    panelTitle: null,
    filterValue: '',
  };

  /**
   * Responsible for controlling the "back" button when moving up a level when
   * nested in a child's items
   *
   * @memberof NestedDropdownMenu
   */
  onBackClick = () => {
    const { selectedPath } = this.state;

    if (selectedPath.length > 0) {
      const newSelectedPath = selectedPath.slice(0, -1);
      const pathItems = newSelectedPath[newSelectedPath.length];
      const currentPath = selectedPath[selectedPath.length - 2];

      let panelTitle = null;
      if (pathItems && pathItems.label) {
        panelTitle = pathItems.label;
      } else if (!isNil(currentPath) && currentPath.label) {
        panelTitle = currentPath.label;
      }

      this.setState({
        panelTitle,
        selectedPath: newSelectedPath,
        showBackBtn: newSelectedPath.length > 0,
      });
    }
  };

  /**
   * Handles clicking on any item row in the dropdown.
   *
   * If that item has an "onClick" key with a function value, we'll use that
   * instead of the generic prop passed to the component.
   *
   * @item {object} item - the entire item that was clicked/pressed
   */
  handleItemClick = (item) => {
    const { onItemClick } = this.props;
    const { selectedPath } = this.state;

    // If we have children and a populated, nested list
    if (item.children || (!item.children && item.allowAddNew)) {
      // Add the new item(s) to the array
      const updatedPath = selectedPath;
      updatedPath.push(item);

      this.setState({
        selectedPath: updatedPath,
        showBackBtn: updatedPath.length > 0,
        panelTitle: item.label || null,
      });
    }

    // If the item has a function set as the onClick key, it takes priority
    else if (item.onItemClick && typeof item.onItemClick === 'function') {
      item.onItemClick(item);
    }

    // If we don't have children
    else {
      onItemClick(item);
    }
  };

  /**
   * Handles changes in the NestedDropdownMenuFilter's input
   *
   * @param {string} filterValue - The current value of input
   */
  handleFilterChange = (e) => {
    e.preventDefault();

    this.setState({
      filterValue: e.target.value,
    });
  };

  /**
   * "react-onclickoutside" requires this function in order to properly
   * close the component on outside click
   */
  handleClickOutside() {
    const { closeOnOutsideClick, onClose, isOpen } = this.props;

    if (closeOnOutsideClick && isOpen) {
      onClose();
    }
  }

  /**
   * Handles the logic when either the "+ Add" button in the topbar or
   * the "+ Create new <thing>" row are clicked.
   *
   * We look for a "addNewClick" key and if none are found, we use the main
   * "onAddNewClick" prop.
   *
   * @param {object} e - JS onclick event
   */
  handleAddNewClick = (e) => {
    e.preventDefault();

    const { onAddNewClick } = this.props;
    const { selectedPath } = this.state;
    const currentPath = selectedPath[selectedPath.length - 1];

    if (!isFunction(onAddNewClick) && !isFunction(currentPath.onAddNewClick)) {
      throw new Error(
        'Either the onAddNewClick prop or a child key must be a function!',
      );
    } else if (!isNil(currentPath.onAddNewClick)) {
      if (!isFunction(currentPath.onAddNewClick)) {
        throw new Error('The onAddNewClick key must be a function!');
      } else {
        currentPath.onAddNewClick(currentPath, selectedPath);
      }
    } else {
      onAddNewClick(currentPath, selectedPath);
    }
  };

  /**
   * Sets up and renders a panel for a group of items in our array of items
   *
   * @param {array} items - The items to be displayed in the path's panel
   * @param {array} path - An array of "directions" as to where we are in the nested items
   */
  renderPanel(items = this.props.items, path = []) {
    const { selectedPath, filterValue } = this.state;

    const depth = path.length;
    const isActive = selectedPath.length === depth;
    const panelClass = `panel-${depth}`;
    const classes = classNames({ panel: depth > 0 }, panelClass, {
      active: isActive,
    });

    return (
      <div key={depth} className={classes} data-test="ndm-panel">
        <div className="molecules-nested-dropdown-menu__wrapper">
          <NestedDropdownMenuList
            path={path}
            currentPath={selectedPath[selectedPath.length - 1]}
            items={items}
            filterValue={filterValue}
            handleItemClick={this.handleItemClick}
            onAddNewClick={this.handleAddNewClick}
          />
        </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.props;
    const { selectedPath, showBackBtn, panelTitle } = this.state;

    const selectedPanel = `active-${selectedPath.length}`;
    const classes = classNames(selectedPanel, 'panels');

    // Render the nested panels for animation
    const nestedPanels = selectedPath.map((item, index) => {
      const path = selectedPath.slice(0, index + 1);
      const items = item.children || [];

      return this.renderPanel(items, path);
    });

    return (
      <Manager data-test="ndm">
        <div>
          <Reference data-test="ndm-trigger">
            {({ ref }) => React.cloneElement(this.props.children, { ref })}
          </Reference>
          {isOpen && (
            <Popper placement={this.props.placement}>
              {({ ref, style, placement, arrowProps }) => (
                <div
                  ref={ref}
                  style={style}
                  data-placement={placement}
                  data-test="ndm-placement"
                >
                  <div className="molecules-nested-dropdown-menu">
                    <NestedDropdownMenuHeader
                      data-test="ndm-header"
                      path={selectedPath}
                      currentPath={selectedPath[selectedPath.length - 1]}
                      showBackBtn={showBackBtn}
                      onBackClick={this.onBackClick}
                      panelTitle={panelTitle}
                      onAddNewClick={this.handleAddNewClick}
                    />

                    {panelTitle && (
                      <NestedDropdownMenuFilter
                        filterValue={this.state.filterValue}
                        handleFilterChange={this.handleFilterChange}
                        placeholder={`Seach ${panelTitle.toLowerCase()}`}
                        data-test="ndm-filter"
                      />
                    )}
                    <div className={classes}>
                      {this.renderPanel()}

                      <CSSTransitionGroup
                        transitionName="molecules-nested-dropdown-menu-transitioning"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                      >
                        {nestedPanels}
                      </CSSTransitionGroup>
                    </div>
                  </div>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )}
            </Popper>
          )}
        </div>
      </Manager>
    );
  }
}

export default onClickOutside(NestedDropdownMenu);
