/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalHeader extends PureComponent {
  static propTypes = {
    // Optional prop for showing the modal "x" for closing it
    hideCloseIcon: PropTypes.bool,

    // Center the title in the modal
    centered: PropTypes.bool,

    // Function to close the modal - used by close icon
    // eslint-disable-next-line react/require-default-props
    onClose(props, propName, componentName) {
      if (!props.hideCloseIcon && typeof props.onClose !== 'function') {
        throw new Error(
          `${componentName} must recieve a valid function for ${propName} when hideCloseIcon is false`,
        );
      }
    },

    // React components rendered inside the modal header
    children: PropTypes.node,
  };

  static defaultProps = {
    hideCloseIcon: false,
    centered: false,
  };

  renderTitle = () => {
    const { children } = this.props;

    if (typeof children === 'string') {
      return <h2>{children}</h2>;
    }

    return children;
  };

  render() {
    const { hideCloseIcon, onClose, centered } = this.props;

    const modalHeaderClasses = classNames('modal-header', {
      'modal-header--centered': centered,
    });

    return (
      <div className={modalHeaderClasses} data-test="modal-header">
        {this.renderTitle()}

        {!hideCloseIcon && (
          <div className="modal-header__icon-wrapper">
            <i
              role="link"
              tabIndex={0}
              className="fa fa-close"
              onClick={onClose}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ModalHeader;
