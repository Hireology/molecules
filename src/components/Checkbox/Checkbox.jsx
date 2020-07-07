import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

class Checkbox extends PureComponent {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string,
  };
  static defaultProps = {
    checked: false,
    disabled: false,
    onChange: null,
    value: '',
  };

  render() {
    return (
      <div className="molecules-checkbox">
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.props.onChange}
          data-test="checkbox"
          disabled={this.props.disabled}
          value={this.props.value}
        />
        <label htmlFor={this.props.id}>
          <span className="molecules-checkbox__label" data-test="label">
            {this.props.label}
          </span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
