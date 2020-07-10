import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import Button from '../../Button';

class NestedDropdownMenuHeader extends PureComponent {
  static propTypes = {
    showBackBtn: PropTypes.bool.isRequired,
    panelTitle: PropTypes.string,
    onBackClick: PropTypes.func.isRequired,
    currentPath: PropTypes.shape({}),
    onAddNewClick: PropTypes.func.isRequired,
    addNewHeaderText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    panelTitle: null,
    currentPath: {},
  };

  render() {
    const {
      onBackClick,
      showBackBtn,
      panelTitle,
      currentPath,
      onAddNewClick,
      addNewHeaderText,
    } = this.props;

    const headerStyles = classNames('molecules-nested-dropdown-menu__header', {
      'molecules-nested-dropdown-menu__header--with-title': !isNil(panelTitle),
    });

    const showAddNew =
      !isNil(currentPath.children) &&
      currentPath.children.length > 0 &&
      currentPath.allowAddNew;

    return (
      <div className={headerStyles}>
        <div className="molecules-nested-dropdown-menu__header-item header-item--left">
          {showBackBtn && (
            <Button
              type="primary"
              onClick={onBackClick}
              data-test="ndm-back-btn"
            >
              <i className="fa fa-chevron-left" /> Back
            </Button>
          )}
        </div>
        <div
          className="molecules-nested-dropdown-menu__header-item header-item--center"
          data-test="ndm-title"
        >
          {panelTitle}
        </div>
        <div className="molecules-nested-dropdown-menu__header-item header-item--right">
          {showAddNew && (
            <Button
              type="primary"
              onClick={onAddNewClick}
              data-test="ndm-add-new-btn"
            >
              <i className="fa fa-plus" /> {addNewHeaderText}
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default NestedDropdownMenuHeader;
