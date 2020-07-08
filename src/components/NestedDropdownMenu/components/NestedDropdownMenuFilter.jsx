import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuFilter extends PureComponent {
  static propTypes = {
    filterValue: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const { filterValue, handleFilterChange, placeholder } = this.props;

    return (
      <div className="molecules-nested-dropdown-menu__filter-wrapper">
        <i className="fa fa-search" />
        <input
          value={filterValue}
          onChange={handleFilterChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default NestedDropdownMenuFilter;
