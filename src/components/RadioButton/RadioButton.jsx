import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './radioButton.scss';

const RadioButton = (props) => {
  const classes = classNames('molecules-radio-button', {
    'molecules-radio-button--inline': props.inline,
  });
  return (
    <div className={classes} data-test="wrapper">
      <input
        id={props.id}
        checked={props.checked}
        className="molecules-radio-button__input"
        disabled={props.disabled}
        name={props.name}
        onChange={props.onChange}
        type="radio"
        value={props.value}
        tabIndex={0}
        data-test="radio-button"
      />
      <label
        className="molecules-radio-button__label"
        htmlFor={props.id}
        data-test="label"
      >
        <div className="molecules-radio-button__indicator" />
        {props.label}
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  id: '',
  inline: false,
  name: 'radioButtonGroup',
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default RadioButton;
