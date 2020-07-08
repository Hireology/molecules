import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RadioButton extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
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
  static defaultProps = {
    checked: false,
    disabled: false,
    error: false,
    id: '',
    inline: false,
    name: 'radioButtonGroup',
  };

  render() {
    const classes = classNames('molecules-radio-button', {
      'molecules-radio-button--inline': this.props.inline,
      'molecules-radio-button--error': this.props.error,
    });
    return (
      <div className={classes} data-test="wrapper">
        <input
          id={this.props.id}
          checked={this.props.checked}
          className="molecules-radio-button__input"
          disabled={this.props.disabled}
          name={this.props.name}
          onChange={this.props.onChange}
          type="radio"
          value={this.props.value}
          tabIndex={0}
          data-test="radio-button"
        />
        <label
          className="molecules-radio-button__label"
          htmlFor={this.props.id}
          data-test="label"
        >
          <div className="molecules-radio-button__indicator" />
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default RadioButton;
