/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';

import NestedDropdownMenuHeader from './components/NestedDropdownMenuHeader';
import NestedDropdownMenuFilter from './components/NestedDropdownMenuFilter';
import NestedDropdownMenuList from './components/NestedDropdownMenuList';

import './nested-dropdown-menu.scss';

class NestedDropdownMenu extends Component {
  static propTypes = {
    onClose: PropTypes.func,
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
            onClick: PropTypes.func,
          }),
        ),
      }),
    ).isRequired,
    onItemClick: PropTypes.func.isRequired,
    onAddNewClick: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    closeOnOutsideClick: true,
    allowAddNew: false,
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

      const panelTitle =
        pathItems && pathItems.label
          ? pathItems.label
          : !isNil(currentPath) && currentPath.label
          ? currentPath.label
          : null;

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
  onItemClick = (item) => {
    const { selectedPath } = this.state;

    // If we have children and a populated, nested list
    if (item.children) {
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
    else if (item.onClick && typeof item.onClick === 'function') {
      item.onClick(item);
    }

    // If we don't have children
    else {
      this.props.onItemClick(item);
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
  handleOutsideClick() {
    const { closeOnOutsideClick, onClose } = this.props;

    if (closeOnOutsideClick) {
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
      <div key={depth} className={classes}>
        <div className="molecules-nested-dropdown-menu__wrapper">
          <NestedDropdownMenuList
            path={path}
            currentPath={selectedPath[selectedPath.length - 1]}
            items={items}
            filterValue={filterValue}
            onItemClick={this.onItemClick}
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
      <Manager>
        <div>
          <Reference>
            {({ ref }) => React.cloneElement(this.props.children, { ref })}
          </Reference>
          {isOpen && (
            <Popper placement="bottom">
              {({ ref, style, placement, arrowProps }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  <div className="molecules-nested-dropdown-menu">
                    <NestedDropdownMenuHeader
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

export default NestedDropdownMenu;
