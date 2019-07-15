import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './radioButton.scss';

class RadioButton extends PureComponent {
  render() {
    const classes = classNames('hireology-radio-button', {
      'hireology-radio-button--inline': this.props.inline,
    });
    return (
      <div className={classes} data-test="wrapper">
        <input
          id={this.props.id}
          checked={this.props.checked}
          className="hireology-radio-button__input"
          disabled={this.props.disabled}
          name={this.props.name}
          onChange={this.props.onChange}
          type="radio"
          value={this.props.value}
          tabIndex={0}
          data-test="radio-button"
        />
        <label
          className="hireology-radio-button__label"
          htmlFor={this.props.id}
          data-test="label"
        >
          <div className="hireology-radio-button__indicator" />
          {this.props.label}
        </label>
      </div>
    );
  }
}

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
