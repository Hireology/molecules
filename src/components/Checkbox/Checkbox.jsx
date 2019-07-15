import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

class Checkbox extends PureComponent {
  render() {
    return (
      <div className="hireology-checkbox">
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.props.onChange}
          data-test="checkbox"
        />
        <label htmlFor={this.props.id}>
          <span className="hireology-checkbox__label" data-test="label">
            {this.props.label}
          </span>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
};

export default Checkbox;
