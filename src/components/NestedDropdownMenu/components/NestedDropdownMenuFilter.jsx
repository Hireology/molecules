import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuFilter extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="nested-dropdown-menu__filter-wrapper">
        <input
          onChange={this.props.handleValueChange}
          value={this.props.filterValue}
        />
      </div>
    );
  }
}

export default NestedDropdownMenuFilter;
