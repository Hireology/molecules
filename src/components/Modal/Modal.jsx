/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import classNames from 'classnames';
import Loader from '../Loader';

import './modal.scss';

class Modal extends Component {
  static propTypes = {
    // String for the "aria-labeledby" attribute of the modal
    aria: PropTypes.string,

    // React components rendered inside the modal
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.node,

    // Whether or not we should close the modal when the "ESC" key is hit.
    closeOnEsc: PropTypes.bool,

    // Whether or not we should close them modal when the modal overlay is clicked.
    closeOnOverlayClick: PropTypes.bool,

    // If we're loading content, we can display a generic loading icon here.
    isLoadingContent: PropTypes.bool,

    // REQUIRED. When or not the modal is open.
    isOpen: PropTypes.bool.isRequired,

    // REQUIRED. Function to close the modal.
    onClose: PropTypes.func.isRequired,

    // Whether or not to show the modal overlay
    showOverlay: PropTypes.bool,
  };

  static defaultProps = {
    aria: 'Modal Dialog',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isLoadingContent: false,
    isOpen: false,
    showOverlay: true,
  };

  componentDidMount() {
    if (this.props.closeOnEsc) {
      window.addEventListener('keydown', this.onEscKeyDown, false);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      window.removeEventListener('keydown', this.onEscKeyDown, false);
    }
  }

  /**
   * Function thats responsible for "closeOnEsc"
   */
  onEscKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      this.props.onClose();
    }
  };

  onBackdropClick = (e) => {
    const { showOverlay, closeOnOverlayClick } = this.props;
    const { id } = e.target;
    if (showOverlay && closeOnOverlayClick && id === 'backdrop') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onClose, showOverlay, isLoadingContent } = this.props;

    const classes = classNames({
      'molecules-modal': true,
      modal__backdrop: showOverlay,
      'is-open': isOpen,
      fadeIn: isOpen,
    });

    const childrenWithProps = !isLoadingContent ? (
      React.Children.map(this.props.children, (child) =>
        React.cloneElement(child, { onClose }),
      )
    ) : (
      <Loader inline />
    );

    if (isOpen) {
      return (
        <Portal data-test="modal">
          <div
            id="backdrop"
            className={classes}
            role="dialog"
            onClick={this.onBackdropClick}
          >
            <div
              id="dialog"
              className="modal__dialog"
              tabIndex="-1"
              aria-labelledby={this.props.aria}
            >
              {childrenWithProps}
            </div>
          </div>
        </Portal>
      );
    }

    return null;
  }
}

export default Modal;
