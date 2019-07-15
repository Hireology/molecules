import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttonGroup.scss';

class ButtonGroup extends PureComponent {
  render() {
    const classes = classNames(
      'hireology-button-group',
      this.props.extraClassNames,
      {
        [`hireology-button-group--${this.props.align}`]: this.props.align,
        [`hireology-button-group--${this.props.size}`]: this.props.size,
      },
    );
    return (
      <div className={classes} data-test="button-group">
        {this.props.children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justified']),
  size: PropTypes.oneOf(['medium', 'small', 'full']),
  extraClassNames: PropTypes.string,
};

ButtonGroup.defaultProps = {
  align: null,
  size: null,
  extraClassNames: '',
};

export default ButtonGroup;
