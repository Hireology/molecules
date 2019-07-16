import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

class Checkbox extends PureComponent {
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
