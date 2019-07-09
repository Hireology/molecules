import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Button = function Button(props) {
  var _classNames;

  var classes = classNames(props.additionalClasses, 'hireology-button btn', "hireology-button--" + props.size, (_classNames = {}, _classNames["hireology-button--" + props.type] = !props.disabled && props.type, _classNames));
  return React.createElement("button", {
    id: props.id,
    disabled: props.disabled,
    onClick: props.onClick,
    onMouseOver: props.onMouseOver,
    onMouseOut: props.onMouseOut,
    onMouseDown: props.onMouseDown,
    className: classes,
    tabIndex: '0',
    "data-test": "button"
  }, props.children);
};

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

var ButtonGroup = function ButtonGroup(props) {
  var _classNames;

  var classes = classNames('hireology-button-group', props.extraClassNames, (_classNames = {}, _classNames["hireology-button-group--" + props.align] = props.align, _classNames["hireology-button-group--" + props.size] = props.size, _classNames));
  return React.createElement("div", {
    className: classes,
    "data-test": "button-group"
  }, props.children);
};

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

var Loader = function Loader(props) {
  var classes = classNames('loader', {
    'loader--inline': props.inline
  });
  return React.createElement("div", {
    className: classes,
    "data-test": "loader"
  }, React.createElement("div", {
    className: "loader__dots-container"
  }, React.createElement("div", {
    className: "loader__dots",
    "data-test": "message"
  }, props.message)));
};

Loader.defaultProps = {
  inline: false,
  message: 'Loading...'
};
Loader.propTypes = {
  message: PropTypes.string,
  inline: PropTypes.bool
};

export { Button, ButtonGroup, Loader };
//# sourceMappingURL=molecules.esm.js.map
