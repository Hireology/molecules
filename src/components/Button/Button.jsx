import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

class Button extends PureComponent {
  render() {
    const classes = classNames(
      this.props.additionalClasses,
      'hireology-button btn',
      `hireology-button--${this.props.size}`,
      {
        [`hireology-button--${this.props.type}`]:
          !this.props.disabled && this.props.type,
      },
    );

    return (
      <button
        id={this.props.id}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        onMouseDown={this.props.onMouseDown}
        className={classes}
        tabIndex={'0'}
        data-test="button"
      >
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  additionalClasses: '',
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
  onMouseDown: null,
  disabled: false,
  type: null,
  size: 'medium',
  id: '',
};

Button.propTypes = {
  additionalClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseDown: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'full']),
  type: PropTypes.oneOf([
    'danger',
    'gray',
    'outline',
    'outlineWhite',
    'primary',
    'secondary',
    'unselected',
  ]),
};

export default Button;
