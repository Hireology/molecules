import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './inputField.scss';
import { alpha, alphaNumeric, email, phone, url } from './inputRegexRules';

class InputField extends PureComponent {
  static propTypes = {
    // classNames assigned to input
    additionalClassNames: PropTypes.string,
    // id assigned to input
    id: PropTypes.string,
    // placeholder value of input
    placeholder: PropTypes.string.isRequired,
    // name of the input
    name: PropTypes.string.isRequired,
    // max length of the input
    maxLength: PropTypes.string,
    // the label for input
    labelName: PropTypes.string,
    // used to know whether or not to display label
    showLabel: PropTypes.bool,
    // whether or not the input field is required
    required: PropTypes.bool,
    // whether or not the input field is disabled
    disabled: PropTypes.bool,
    // value of the input
    value: PropTypes.string,
    // function to handle input change (controlled forms)
    onChange: PropTypes.func.isRequired,
    // type of input field to determine the correct validation parameters
    type: PropTypes.oneOf([
      'text',
      'email',
      'phone',
      'password',
      'url',
      'number',
    ]),
  };
  static defaultProps = {
    type: 'text',
    required: false,
    disabled: false,
    showLabel: true,
    labelName: '',
    maxLength: '',
    value: '',
    inputRegexRules: { alpha, alphaNumeric, email, phone, url },
  };

  constructor(props) {
    super(props);
    this.state = {
      showError: null,
      errorMessage: '',
      focused: false,
    };
  }
  handleChange = (event) => {
    const { showError } = this.state;
    const { value } = event.target;
    this.props.onChange(this.props.name, value);
    if (showError) {
      this.handleValidation();
    }
  };
  handleFocus = () => {
    this.setState({
      focused: true,
    });
  };

  handleValidation = () => {
    const { type, required, value, inputRegexRules } = this.props;
    const inputRegexTypes = ['email', 'phone', 'url'];
    // Handles the validation for required fields
    if (value.length === 0 && required) {
      this.setState({
        showError: true,
        errorMessage: 'is required',
        focused: true,
      });
      return;
    }
    if (value.length === 0) {
      this.setState({
        showError: false,
        focused: true,
      });
      return;
    }
    // validates regex based on input type
    if (inputRegexTypes.includes(type) && !inputRegexRules[type].test(value)) {
      this.setState({
        showError: true,
        errorMessage: 'is invalid',
        focused: true,
      });
      return;
    }

    this.setState({
      showError: false,
      focused: false,
    });
  };

  render() {
    const {
      additionalClassNames,
      id,
      placeholder,
      name,
      maxLength,
      labelName,
      showLabel,
      required,
      disabled,
      value,
      type,
    } = this.props;

    const { showError, errorMessage, focused } = this.state;

    return (
      <form action="">
        <div className={`textInput input-field ${additionalClassNames}`}>
          <input
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            className={`${showError && 'error'} ${disabled ? 'disabled' : ''}`}
            type={type}
            name={name}
            value={value}
            maxLength={maxLength}
            required={required}
            disabled={disabled}
            id={id || name}
            placeholder={labelName && labelName !== '' ? '' : placeholder}
          />
          <label
            className={`${showLabel || 'hide-label'} ${
              focused ? 'focused' : ''
            }`}
            htmlFor={name}
          >
            {labelName}
          </label>
          {showError && (
            <div className="error-style">{`${placeholder} ${errorMessage}`}</div>
          )}
          {showError === false && (
            <div className="success">
              <i className="fa fa-check-circle" />
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default InputField;
