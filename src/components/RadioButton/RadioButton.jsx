import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './radioButton.scss';

const RadioButton = (props) => {
  const classes = classNames('hireology-radio-button', props.extraClassNames, {
    'hireology-radio-button--inline': props.inline,
  });
  return (
    <div className={classes}>
      <input
        id={props.id}
        checked={props.checked}
        className="hireology-radio-button__input"
        disabled={props.disabled}
        name={props.name}
        onChange={props.onChange}
        type="radio"
        value={props.value}
        tabIndex={0}
      />
      <label className="hireology-radio-button__label" htmlFor={props.id}>
        <div className="hireology-radio-button__indicator" />
        {props.label}
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  checked: false,
  extraClassNames: '',
  disabled: false,
  id: '',
  inline: false,
  name: 'radioButtonGroup',
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  extraClassNames: PropTypes.string,
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
