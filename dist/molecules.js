(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
  (global = global || self, factory(global.molecules = {}, global.React, global.PropTypes, global.classnames));
}(this, function (exports, React, PropTypes, classNames) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

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

  exports.Button = Button;
  exports.ButtonGroup = ButtonGroup;
  exports.Loader = Loader;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=molecules.js.map
