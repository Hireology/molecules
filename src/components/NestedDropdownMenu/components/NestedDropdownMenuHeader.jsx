import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuHeader extends PureComponent {
  static propTypes = {
    path: PropTypes.arrayOf(PropTypes.string).isRequired,
    onBackClick: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const { path, onBackClick } = this.props;

    console.log('--- path ---');
    console.log(path);

    return (
      <div className="nested-dropdown-menu__header">
        <div className="nested-dropdown-menu__header-item header-item--left">
          <button onClick={() => onBackClick()}>
            <i className="fa fa-chevron-left" /> Back
          </button>
        </div>
        <div className="nested-dropdown-menu__header-item header-item--center">
          Center
        </div>
        <div className="nested-dropdown-menu__header-item header-item--right">
          Right
        </div>
      </div>
    );
  }
}

export default NestedDropdownMenuHeader;
