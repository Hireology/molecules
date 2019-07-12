import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

const Button = (props) => {
  const classes = classNames(
    props.additionalClasses,
    'molecules-button btn',
    `molecules-button--${props.size}`,
    {
      [`molecules-button--${props.type}`]: !props.disabled && props.type,
    },
  );

  return (
    <button
      id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      onMouseDown={props.onMouseDown}
      className={classes}
      tabIndex={'0'}
      data-test="button"
    >
      {props.children}
    </button>
  );
};

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
