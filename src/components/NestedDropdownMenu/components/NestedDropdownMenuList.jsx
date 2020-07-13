import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleItemClick: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
    currentPath: PropTypes.shape({}),
    onAddNewClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentPath: {},
  };

  /**
   * Used by the mapping funcition to filter unwanted values when a
   * user is using the search bar.
   *
   * @param {object} item - A single item in the prop array of items
   */
  filterValues = (item) => {
    const filterValue = this.props.filterValue.trim().toLowerCase();
    const currentValue = item.label.trim().toLowerCase();

    return currentValue.includes(filterValue);
  };

  render() {
    const { items, handleItemClick, currentPath, onAddNewClick } = this.props;
    return (
      <div className="molecules-nested-dropdown-menu__content">
        <ul className="molecules-nested-dropdown-menu__content-list">
          {items.filter(this.filterValues).map((item) => (
            <li key={item.value}>
              <a
                id={item.value}
                role="button"
                tabIndex={0}
                data-test="ndm-list-item"
                className="molecules-nested-dropdown-menu__content-list__item"
                onClick={() => handleItemClick(item)}
              >
                {item.label}
                {item.children && item.children.length > 0 && (
                  <i className="fa fa-chevron-right" />
                )}
              </a>
            </li>
          ))}

          {items.length === 0 && currentPath.allowAddNew && (
            <li className="molecules-nested-dropdown-menu__content-list__add-new">
              <a
                role="button"
                tabIndex={0}
                onClick={onAddNewClick}
                data-test="ndm-add-new-row"
              >
                <i className="fa fa-plus" />
                {`Create new ${currentPath.label.toLowerCase()}`}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NestedDropdownMenuList;
