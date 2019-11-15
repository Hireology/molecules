import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ModalFooter extends PureComponent {
  static propTypes = {
    // React components rendered inside the modal
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div className='modal-footer' data-test='modal-footer'>
        {children}
      </div>
    );
  }
}

export default ModalFooter;
