import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onItemClick: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
    currentPath: PropTypes.shape({}),
    onAddNewClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentPath: {},
  };

  filterValues = (item) => {
    const filterValue = this.props.filterValue.trim().toLowerCase();
    const currentValue = item.label.trim().toLowerCase();

    return currentValue.includes(filterValue);
  };

  render() {
    const { items, onItemClick, currentPath, onAddNewClick } = this.props;
    return (
      <div className="molecules-nested-dropdown-menu__content">
        <ul className="molecules-nested-dropdown-menu__content-list">
          {items.filter(this.filterValues).map((item) => (
            <li key={item.value}>
              <a
                role="button"
                tabIndex={0}
                className="molecules-nested-dropdown-menu__content-list__item"
                onClick={() => onItemClick(item)}
              >
                <span>{item.label}</span>
                {item.children && item.children.length > 0 && (
                  <i className="fa fa-chevron-right" />
                )}
              </a>
            </li>
          ))}

          {items.length === 0 && currentPath.allowAddNew && (
            <div className="molecules-nested-dropdown-menu__content-list__add-new">
              <a role="button" tabIndex={0} onClick={onAddNewClick}>
                <i className="fa fa-plus" />
                {`Create new ${currentPath.label.toLowerCase()}`}
              </a>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default NestedDropdownMenuList;
