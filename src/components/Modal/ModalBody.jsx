import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ModalBody extends PureComponent {
  static propTypes = {
    // React components rendered inside the modal
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="modal-body" data-test="modal-body">
        {children}
      </div>
    );
  }
}

export default ModalBody;
