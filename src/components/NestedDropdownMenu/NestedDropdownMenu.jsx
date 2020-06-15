/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';

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
  };

  static defaultProps = {
    isOpen: false,
    closeOnOutsideClick: true,
  };

  state = {
    selectedPath: [],
    showBackBtn: false,
    showAddBtn: false,
    panelTitle: null,
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

      this.setState({
        selectedPath: newSelectedPath,
        showAddBtn: (pathItems && !pathItems.children) || false,
        showBackBtn: newSelectedPath.length > 0,
        panelTitle: (pathItems && pathItems.label) || null,
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
    const { onItemClick } = this.props;
    const { selectedPath } = this.state;

    // If we children and a populated, nested list
    if (item.children && item.children.length > 0) {
      // Add the new item(s) to the array
      const updatedPath = selectedPath;
      updatedPath.push(item);

      this.setState({
        selectedPath: updatedPath,
        showAddBtn: !item.children,
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
      onItemClick(item);
    }
  };

  /**
   * Handles changes in the NestedDropdownMenuFilter's input
   *
   * @param {string} filterValue - The current value of input
   */
  handleFilterChange = (filterValue) => {
    this.setState({
      filterValue,
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
   * Sets up and renders a panel for a group of items in our array of items
   *
   * @param {array} items - The items to be displayed in the path's panel
   * @param {array} path - An array of "directions" as to where we are in the nested items
   */
  renderPanel(items = this.props.items, path = []) {
    const { selectedPath } = this.state;

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
            items={items}
            path={path}
            onItemClick={this.onItemClick}
          />
        </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.props;
    const { selectedPath, showAddBtn, showBackBtn, panelTitle } = this.state;

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
                      showBackBtn={showBackBtn}
                      onBackClick={this.onBackClick}
                      showAddBtn={showAddBtn}
                      panelTitle={panelTitle}
                    />

                    <NestedDropdownMenuFilter
                      filterValue={this.state.filterValue}
                      handleFilterChange={this.handleFilterChange}
                    />
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
