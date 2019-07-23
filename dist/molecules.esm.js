import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Button, _PureComponent);

  function Button() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _classNames;

    var classes = classNames(this.props.additionalClasses, 'molecules-button btn', "molecules-button--" + this.props.size, (_classNames = {}, _classNames["molecules-button--" + this.props.type] = !this.props.disabled && this.props.type, _classNames));
    return React.createElement("button", {
      id: this.props.id,
      disabled: this.props.disabled,
      onClick: this.props.onClick,
      onMouseOver: this.props.onMouseOver,
      onMouseOut: this.props.onMouseOut,
      onMouseDown: this.props.onMouseDown,
      className: classes,
      tabIndex: '0',
      "data-test": "button"
    }, this.props.children);
  };

  return Button;
}(PureComponent);

Button.defaultProps = {
  additionalClasses: '',
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
  onMouseDown: null,
  disabled: false,
  type: null,
  size: 'medium',
  id: ''
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
  type: PropTypes.oneOf(['danger', 'gray', 'outline', 'outlineWhite', 'primary', 'secondary', 'unselected'])
};

var ButtonGroup =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ButtonGroup, _PureComponent);

  function ButtonGroup() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _classNames;

    var classes = classNames('molecules-button-group', this.props.extraClassNames, (_classNames = {}, _classNames["molecules-button-group--" + this.props.align] = this.props.align, _classNames["molecules-button-group--" + this.props.size] = this.props.size, _classNames));
    return React.createElement("div", {
      className: classes,
      "data-test": "button-group"
    }, this.props.children);
  };

  return ButtonGroup;
}(PureComponent);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justified']),
  size: PropTypes.oneOf(['medium', 'small', 'full']),
  extraClassNames: PropTypes.string
};
ButtonGroup.defaultProps = {
  align: null,
  size: null,
  extraClassNames: ''
};

var Loader =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Loader, _PureComponent);

  function Loader() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Loader.prototype;

  _proto.render = function render() {
    var classes = classNames('molecules-loader', {
      'molecules-loader--inline': this.props.inline
    });
    return React.createElement("div", {
      className: classes,
      "data-test": "loader"
    }, React.createElement("div", {
      className: "molecules-loader__dots-container"
    }, React.createElement("div", {
      className: "molecules-loader__dots",
      "data-test": "message"
    }, this.props.message)));
  };

  return Loader;
}(PureComponent);

Loader.defaultProps = {
  inline: false,
  message: 'Loading...'
};
Loader.propTypes = {
  message: PropTypes.string,
  inline: PropTypes.bool
};

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Checkbox, _PureComponent);

  function Checkbox() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "molecules-checkbox"
    }, React.createElement("input", {
      type: "checkbox",
      id: this.props.id,
      checked: this.props.checked,
      onChange: this.props.onChange,
      "data-test": "checkbox",
      disabled: this.props.disabled
    }), React.createElement("label", {
      htmlFor: this.props.id
    }, React.createElement("span", {
      className: "molecules-checkbox__label",
      "data-test": "label"
    }, this.props.label)));
  };

  return Checkbox;
}(PureComponent);

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func
};
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null
};

var RadioButton =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(RadioButton, _PureComponent);

  function RadioButton() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = RadioButton.prototype;

  _proto.render = function render() {
    var classes = classNames('molecules-radio-button', {
      'molecules-radio-button--inline': this.props.inline,
      'molecules-radio-button--error': this.props.error
    });
    return React.createElement("div", {
      className: classes,
      "data-test": "wrapper"
    }, React.createElement("input", {
      id: this.props.id,
      checked: this.props.checked,
      className: "molecules-radio-button__input",
      disabled: this.props.disabled,
      name: this.props.name,
      onChange: this.props.onChange,
      type: "radio",
      value: this.props.value,
      tabIndex: 0,
      "data-test": "radio-button"
    }), React.createElement("label", {
      className: "molecules-radio-button__label",
      htmlFor: this.props.id,
      "data-test": "label"
    }, React.createElement("div", {
      className: "molecules-radio-button__indicator"
    }), this.props.label));
  };

  return RadioButton;
}(PureComponent);

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  error: false,
  id: '',
  inline: false,
  name: 'radioButtonGroup'
};
RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
};

var Link =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Link, _PureComponent);

  function Link() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.render = function render() {
    var _classNames;

    var classes = classNames('molecules-link', this.props.additionalClasses, (_classNames = {}, _classNames["molecules-link--" + this.props.type] = this.props.type, _classNames));
    return React.createElement("button", {
      className: classes,
      id: this.props.id,
      disabled: this.props.disabled,
      onClick: this.props.onClick,
      tabIndex: 0,
      "data-test": "link"
    }, this.props.children);
  };

  return Link;
}(PureComponent);

Link.defaultProps = {
  onClick: null,
  disabled: false,
  type: null,
  additionalClasses: null,
  id: null
};
Link.propTypes = {
  additionalClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['warning', 'danger', 'secondary'])
};

export { Button, ButtonGroup, Checkbox, Link, Loader, RadioButton };
//# sourceMappingURL=molecules.esm.js.map
