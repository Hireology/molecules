import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuFilter extends PureComponent {
  static propTypes = {
    filterValue: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const { filterValue, handleFilterChange } = this.props;

    return (
      <div className="molecules-nested-dropdown-menu__filter-wrapper">
        <input value={filterValue} onChange={handleFilterChange} />
      </div>
    );
  }
}

export default NestedDropdownMenuFilter;
