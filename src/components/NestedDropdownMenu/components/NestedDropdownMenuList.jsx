import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <div className="molecules-nested-dropdown-menu__content">
        <ul className="molecules-nested-dropdown-menu__content-list">
          {this.props.items.map((item) => {
            if (item.children && item.children.length > 0) {
              return (
                <li
                  key={item.value}
                  className="molecules-nested-dropdown-menu__content-list__item"
                >
                  <button onClick={() => this.props.onItemClick(item)}>
                    {item.label}
                  </button>
                </li>
              );
            }

            return (
              <li
                key={item.value}
                className="molecules-nested-dropdown-menu__content-list__item"
              >
                <button onClick={() => this.props.onItemClick(item)}>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NestedDropdownMenuList;
