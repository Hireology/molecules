import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NestedDropdownMenuHeader extends PureComponent {
  static propTypes = {
    showBackBtn: PropTypes.bool.isRequired,
    showAddBtn: PropTypes.bool.isRequired,
    panelTitle: PropTypes.string,
    onBackClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    panelTitle: null,
  };

  render() {
    const { onBackClick, showBackBtn, showAddBtn, panelTitle } = this.props;

    return (
      <div className="molecules-nested-dropdown-menu__header">
        <div className="molecules-nested-dropdown-menu__header-item header-item--left">
          {showBackBtn && (
            <button onClick={() => onBackClick()}>
              <i className="fa fa-chevron-left" /> Back
            </button>
          )}
        </div>
        <div className="molecules-nested-dropdown-menu__header-item header-item--center">
          {panelTitle}
        </div>
        <div className="molecules-nested-dropdown-menu__header-item header-item--right">
          {showAddBtn && (
            <button onClick={() => onBackClick()}>
              <i className="fa fa-chevron-plus" /> Add
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default NestedDropdownMenuHeader;
