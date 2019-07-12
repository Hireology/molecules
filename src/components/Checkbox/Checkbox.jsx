import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

const Checkbox = (props) => {
  return (
    <div className="molecules-checkbox">
      <input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
        data-test="checkbox"
        disabled={props.disabled}
      />
      <label htmlFor={props.id}>
        <span className="molecules-checkbox__label" data-test="label">
          {props.label}
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
};

export default Checkbox;
