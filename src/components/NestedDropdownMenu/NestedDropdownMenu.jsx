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
        children: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
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
  };

  onBackClick = () => {
    const { selectedPath } = this.state;

    if (selectedPath.length > 0) {
      this.setState({
        selectedPath: selectedPath.slice(0, -1),
      });
    }
  };

  onItemClick = (item) => {
    const { onItemClick } = this.props;
    const { selectedPath } = this.state;

    // If we children and a populated, nested list
    if (item.children && item.children.length > 0) {
      const updatedPath = selectedPath;
      updatedPath.push(item);

      this.setState({
        selectedPath: updatedPath,
      });
    }

    // If we don't have children
    else {
      onItemClick(item);
    }
  };

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
    const { closeOnOutsideClick } = this.props;

    if (closeOnOutsideClick) {
      this.props.onClose();
    }
  }

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
        <div className="nested-dropdown-menu__wrapper">
          <NestedDropdownMenuHeader
            path={path}
            onBackClick={this.onBackClick}
          />
          <NestedDropdownMenuFilter
            handleFilterChange={this.handleFilterChange}
            filterValue={this.state.filterValue}
          />
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

    const selectedPanel = `active-${this.state.selectedPath.length}`;
    const classes = classNames(selectedPanel, 'panels');

    const nestedPanels = this.state.selectedPath.map((item, index) => {
      const path = this.state.selectedPath.slice(0, index + 1);
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
                  <div className="nested-dropdown-menu">
                    <div className={classes}>
                      {this.renderPanel()}

                      <CSSTransitionGroup
                        transitionName="tree-example"
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
