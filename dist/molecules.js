(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames', 'react-dom'], factory) :
  (global = global || self, factory(global.molecules = {}, global.React, global.PropTypes, global.classnames, global.ReactDOM));
}(this, (function (exports, React, PropTypes$1, classNames, ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes$1 = PropTypes$1 && Object.prototype.hasOwnProperty.call(PropTypes$1, 'default') ? PropTypes$1['default'] : PropTypes$1;
  classNames = classNames && Object.prototype.hasOwnProperty.call(classNames, 'default') ? classNames['default'] : classNames;
  var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var Button = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Button, _PureComponent);

    function Button() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Button.prototype;

    _proto.render = function render() {
      var _classNames;

      var classes = classNames(this.props.additionalClasses, 'molecules-button btn', "molecules-button--" + this.props.size, (_classNames = {}, _classNames["molecules-button--" + this.props.type] = !this.props.disabled && this.props.type, _classNames));
      return /*#__PURE__*/React__default.createElement("button", {
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
  }(React.PureComponent);

  _defineProperty(Button, "defaultProps", {
    additionalClasses: '',
    onClick: null,
    onMouseOver: null,
    onMouseOut: null,
    onMouseDown: null,
    disabled: false,
    type: null,
    size: 'medium',
    id: ''
  });

  _defineProperty(Button, "propTypes", {
    additionalClasses: PropTypes$1.string,
    children: PropTypes$1.node.isRequired,
    disabled: PropTypes$1.bool,
    id: PropTypes$1.string,
    onClick: PropTypes$1.func,
    onMouseOut: PropTypes$1.func,
    onMouseOver: PropTypes$1.func,
    onMouseDown: PropTypes$1.func,
    size: PropTypes$1.oneOf(['small', 'medium', 'full']),
    type: PropTypes$1.oneOf(['danger', 'gray', 'outline', 'outlineWhite', 'primary', 'secondary', 'unselected'])
  });

  var ButtonGroup = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(ButtonGroup, _PureComponent);

    function ButtonGroup() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = ButtonGroup.prototype;

    _proto.render = function render() {
      var _classNames;

      var classes = classNames('molecules-button-group', this.props.extraClassNames, (_classNames = {}, _classNames["molecules-button-group--" + this.props.align] = this.props.align, _classNames["molecules-button-group--" + this.props.size] = this.props.size, _classNames));
      return /*#__PURE__*/React__default.createElement("div", {
        className: classes,
        "data-test": "button-group"
      }, this.props.children);
    };

    return ButtonGroup;
  }(React.PureComponent);

  _defineProperty(ButtonGroup, "propTypes", {
    children: PropTypes$1.node.isRequired,
    align: PropTypes$1.oneOf(['left', 'right', 'center', 'justified']),
    size: PropTypes$1.oneOf(['medium', 'small', 'full']),
    extraClassNames: PropTypes$1.string
  });

  _defineProperty(ButtonGroup, "defaultProps", {
    align: null,
    size: null,
    extraClassNames: ''
  });

  var Loader = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Loader, _PureComponent);

    function Loader() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Loader.prototype;

    _proto.render = function render() {
      var classes = classNames('molecules-loader', {
        'molecules-loader--inline': this.props.inline
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: classes,
        "data-test": "loader"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-loader__dots-container"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-loader__dots",
        "data-test": "message"
      }, this.props.message)));
    };

    return Loader;
  }(React.PureComponent);

  _defineProperty(Loader, "propTypes", {
    message: PropTypes$1.string,
    inline: PropTypes$1.bool
  });

  _defineProperty(Loader, "defaultProps", {
    inline: false,
    message: 'Loading...'
  });

  var Checkbox = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Checkbox, _PureComponent);

    function Checkbox() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Checkbox.prototype;

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-checkbox"
      }, /*#__PURE__*/React__default.createElement("input", {
        type: "checkbox",
        id: this.props.id,
        checked: this.props.checked,
        onChange: this.props.onChange,
        "data-test": "checkbox",
        disabled: this.props.disabled,
        value: this.props.value
      }), /*#__PURE__*/React__default.createElement("label", {
        htmlFor: this.props.id
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "molecules-checkbox__label",
        "data-test": "label"
      }, this.props.label)));
    };

    return Checkbox;
  }(React.PureComponent);

  _defineProperty(Checkbox, "propTypes", {
    id: PropTypes$1.oneOfType([PropTypes$1.number, PropTypes$1.string]).isRequired,
    checked: PropTypes$1.bool,
    disabled: PropTypes$1.bool,
    label: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.object]).isRequired,
    onChange: PropTypes$1.func,
    value: PropTypes$1.string
  });

  _defineProperty(Checkbox, "defaultProps", {
    checked: false,
    disabled: false,
    onChange: null,
    value: ''
  });

  var RadioButton = /*#__PURE__*/function (_PureComponent) {
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
      return /*#__PURE__*/React__default.createElement("div", {
        className: classes,
        "data-test": "wrapper"
      }, /*#__PURE__*/React__default.createElement("input", {
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
      }), /*#__PURE__*/React__default.createElement("label", {
        className: "molecules-radio-button__label",
        htmlFor: this.props.id,
        "data-test": "label"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-radio-button__indicator"
      }), this.props.label));
    };

    return RadioButton;
  }(React.PureComponent);

  _defineProperty(RadioButton, "propTypes", {
    checked: PropTypes$1.bool,
    disabled: PropTypes$1.bool,
    error: PropTypes$1.bool,
    id: PropTypes$1.string,
    inline: PropTypes$1.bool,
    label: PropTypes$1.string.isRequired,
    name: PropTypes$1.string,
    onChange: PropTypes$1.func.isRequired,
    value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number, PropTypes$1.bool]).isRequired
  });

  _defineProperty(RadioButton, "defaultProps", {
    checked: false,
    disabled: false,
    error: false,
    id: '',
    inline: false,
    name: 'radioButtonGroup'
  });

  var Link = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Link, _PureComponent);

    function Link() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Link.prototype;

    _proto.render = function render() {
      var _classNames;

      var classes = classNames('molecules-link', this.props.additionalClasses, (_classNames = {}, _classNames["molecules-link--" + this.props.type] = this.props.type, _classNames));
      return /*#__PURE__*/React__default.createElement("button", {
        className: classes,
        id: this.props.id,
        disabled: this.props.disabled,
        onClick: this.props.onClick,
        tabIndex: 0,
        "data-test": "link"
      }, this.props.children);
    };

    return Link;
  }(React.PureComponent);

  _defineProperty(Link, "propTypes", {
    additionalClasses: PropTypes$1.string,
    children: PropTypes$1.node.isRequired,
    disabled: PropTypes$1.bool,
    id: PropTypes$1.string,
    onClick: PropTypes$1.func,
    type: PropTypes$1.oneOf(['warning', 'danger', 'secondary'])
  });

  _defineProperty(Link, "defaultProps", {
    onClick: null,
    disabled: false,
    type: null,
    additionalClasses: null,
    id: null
  });

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }
      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }

  var _baseClamp = baseClamp;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }
    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber_1(value);
    if (value === INFINITY$1 || value === -INFINITY$1) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite_1(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  var toInteger_1 = toInteger;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString;

  /**
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`,
   *  else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */
  function startsWith(string, target, position) {
    string = toString_1(string);
    position = position == null
      ? 0
      : _baseClamp(toInteger_1(position), 0, string.length);

    target = _baseToString(target);
    return string.slice(position, position + target.length) == target;
  }

  var startsWith_1 = startsWith;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return _root.Date.now();
  };

  var now_1 = now;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_1(wait) || 0;
    if (isObject_1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now_1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now_1());
    }

    function debounced() {
      var time = now_1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var debounce_1 = debounce;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  var _baseFindIndex = baseFindIndex;

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  var _baseIsNaN = baseIsNaN;

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  var _strictIndexOf = strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? _strictIndexOf(array, value, fromIndex)
      : _baseFindIndex(array, _baseIsNaN, fromIndex);
  }

  var _baseIndexOf = baseIndexOf;

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  var _baseIndexOfWith = baseIndexOfWith;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? _baseIndexOfWith : _baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;

    if (array === values) {
      values = _copyArray(values);
    }
    if (iteratee) {
      seen = _arrayMap(array, _baseUnary(iteratee));
    }
    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;

      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }

  var _basePullAll = basePullAll;

  /**
   * This method is like `_.pull` except that it accepts an array of values to remove.
   *
   * **Note:** Unlike `_.difference`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * _.pullAll(array, ['a', 'c']);
   * console.log(array);
   * // => ['b', 'b']
   */
  function pullAll(array, values) {
    return (array && array.length && values && values.length)
      ? _basePullAll(array, values)
      : array;
  }

  var pullAll_1 = pullAll;

  /**
   * Filters the passed in array based on the passed in filter.
   * Will match any strings regardless of casing that contain the
   * filter starting from the beginning of the word. Will not match
   * strings that contain the filter if it is not at the beginning of
   * a word.
   *
   * ex: the filter 'fo' will match 'foo bar' and 'bar foo', but not 'barfoo'
   *
   * @param {Array of {value: string} ]} data : array of objects to be filtered on property 'value'
   * @param {String} filter : string to filter data with
   */

  var filterData = function filterData(data, untrimmedFilter) {
    var filter = untrimmedFilter.trim();
    return data.filter(function (dataItem) {
      var suggestionSection = null;

      for (var wordIteration = 0; suggestionSection !== ''; wordIteration += 1) {
        suggestionSection = dataItem.value.split(' ').slice(wordIteration).join(' ');

        if (startsWith_1(suggestionSection.toLowerCase(), filter.toLowerCase())) {
          return true;
        }
      }

      return false;
    });
  };
  /**
   * Sorts filtered data by:
   * 1) Matches casing starting from the beginning of the string (alphabetized)
   * 2) Matches casing starting on any other word but the beginning (alphabetized)
   * 3) Different casing starting from the beginning of the string (alphabetized)
   * 4) Different casing starting on any other word but the beginning (alphabetized)
   *
   * ex: with filter 'fo': 'foo bar', 'bar foo', 'Foo Bar', 'Bar Foo'
   *
   * @param {Array of {value: string} ]} data : array of filtered objects to be sorted
   * @param {String} filter : string data was filtered with
   */

  var sortFilteredData = function sortFilteredData(data, untrimmedFilter) {
    var filter = untrimmedFilter.trim(); // Remove any data items that have the same value

    var temp = [];
    var unsortedData = data.filter(function (dataItem) {
      if (temp.includes(dataItem.value)) {
        return false;
      } else {
        temp.push(dataItem.value);
        return true;
      }
    });
    var sortedData = []; // Loop through each of the sorting iterations, stop early if
    // we have already sorted enough suggestions to populate the dropdown

    var _loop = function _loop(sortIteration) {
      var section = unsortedData.filter(function (dataItem) {
        // First iteration return suggestions that match casing
        // of filter starting from the beginning of the string
        if (sortIteration === 0) {
          return startsWith_1(dataItem.value, filter);
        } // Second iteration return suggestions that match casing
        // of filter from start of any word in the string


        if (sortIteration === 1) {
          var caseSensitiveSection = null;
          var matches = false;

          for (var wordIteration = 1; caseSensitiveSection !== '' && !matches; wordIteration += 1) {
            caseSensitiveSection = dataItem.value.split(' ').slice(wordIteration).join(' ');
            matches = startsWith_1(caseSensitiveSection, filter);
          }

          return matches;
        } // Third iteration return suggestions with different casing
        // that match filter starting from the beginning of the string


        if (sortIteration === 2) {
          return startsWith_1(dataItem.value.toLowerCase(), filter.toLowerCase());
        } // Final iteration return the rest of the unsorted data


        return true;
      }); // Remove selected suggestions from the unsorted array to stop
      // them from being re-selected in the next iteration. Add the
      // selected suggestions to the sorted array.

      pullAll_1(unsortedData, section);
      sortedData.push.apply(sortedData, section.sort(function (a, b) {
        return a.value < b.value ? -1 : 1;
      }));
    };

    for (var sortIteration = 0; sortIteration < 4; sortIteration += 1) {
      _loop(sortIteration);
    }

    return sortedData;
  };
  /**
   * Custom prop-type validation for this.props.data and this.props.suggestions
   * Fails validation if:
   *   - this.props.useCustomFilter is false, and data is undefined
   *   - data is not an array
   *   - objects in data array are not formatted: {value: string, id: number}
   */

  var customDataValidator = function customDataValidator(props, propName, componentName) {
    if (!props.useCustomFilter) {
      var _PropTypes$checkPropT;

      PropTypes$1.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = PropTypes$1.arrayOf(PropTypes$1.shape({
        value: PropTypes$1.string.isRequired,
        id: PropTypes$1.number.isRequired
      })).isRequired, _PropTypes$checkPropT), props, propName, componentName);
    }
  };
  /**
   * Custom prop-type validation for this.props.onChange
   * Fails validation if:
   *   - this.props.useCustomFilter is true, and onChange is undefined
   *   - onChange is not a function
   */

  var customOnChangeValidator = function customOnChangeValidator(props, propName, componentName) {
    if (props.useCustomFilter) {
      var _PropTypes$checkPropT2;

      PropTypes$1.checkPropTypes((_PropTypes$checkPropT2 = {}, _PropTypes$checkPropT2[propName] = PropTypes$1.func.isRequired, _PropTypes$checkPropT2), props, propName, componentName);
    }
  };
  /**
   * Custom prop-type validation for this.props.data and this.props.suggestions
   * Fails validation if:
   *   - this.props.useCustomFilter is false, and data is undefined
   *   - data is not an array
   *   - objects in data array are not formatted: {value: string, id: number}
   */

  var customSuggestionsValidator = function customSuggestionsValidator(props, propName, componentName) {
    if (props.useCustomFilter) {
      var _PropTypes$checkPropT3;

      PropTypes$1.checkPropTypes((_PropTypes$checkPropT3 = {}, _PropTypes$checkPropT3[propName] = PropTypes$1.arrayOf(PropTypes$1.shape({
        value: PropTypes$1.string.isRequired,
        id: PropTypes$1.number.isRequired
      })).isRequired, _PropTypes$checkPropT3), props, propName, componentName);
    }
  };

  var TypeAheadSearch = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TypeAheadSearch, _React$Component);

    function TypeAheadSearch() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        filter: _this.props.initialFilter,
        suggestions: [],
        activeSuggestionIndex: -1,
        shouldCallOnChange: true
      });

      _defineProperty(_assertThisInitialized(_this), "onInputChange", function (e) {
        var filter = e.target.value;

        _this.setState({
          filter: filter
        });

        if (!_this.props.useCustomFilter) {
          if (filter.trim().length > 1) {
            return _this.updateSuggestions(filter);
          } else {
            _this.setState({
              suggestions: [],
              activeSuggestionIndex: -1
            });
          }
        } else if (filter.trim().length > 1) {
          _this.delayedOnChange(filter);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onSubmit", function (filter) {
        _this.setState({
          filter: filter,
          activeSuggestionIndex: -1
        });

        if (!_this.props.useCustomFilter) {
          _this.setState({
            suggestions: []
          });

          var filteredOptions = filterData(_this.props.data, filter);

          _this.props.onSubmit(filteredOptions, filter);
        } else {
          _this.setState({
            shouldCallOnChange: false
          });

          _this.props.onSubmit(filter);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (filter) {
        if (_this.state.shouldCallOnChange) {
          _this.props.onChange(filter);
        } else {
          _this.setState({
            shouldCallOnChange: true
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getSuggestionText", function (suggestion) {
        var suggestionSection = null;

        for (var wordIteration = 0; suggestionSection !== ''; wordIteration += 1) {
          suggestionSection = suggestion.split(' ').slice(wordIteration).join(' ');

          if (startsWith_1(suggestionSection.toLowerCase(), _this.state.filter.trim().toLowerCase())) {
            var preBoldText = suggestion.split(' ').slice(0, wordIteration).join(' ');
            var boldText = suggestion.split(' ').slice(wordIteration).join(' ').slice(0, _this.state.filter.length);
            var postBoldText = suggestion.split(' ').slice(wordIteration).join(' ').slice(_this.state.filter.length);
            return /*#__PURE__*/React__default.createElement("span", {
              "data-test": "suggestion-text"
            }, preBoldText !== '' && preBoldText + " ", /*#__PURE__*/React__default.createElement("b", null, boldText), postBoldText !== '' && postBoldText);
          }
        }

        return /*#__PURE__*/React__default.createElement("span", {
          "data-test": "suggestion-text"
        }, suggestion);
      });

      _defineProperty(_assertThisInitialized(_this), "delayedOnChange", debounce_1(_this.onChangeHandler, 500));

      _defineProperty(_assertThisInitialized(_this), "updateSuggestions", function (filter) {
        var filteredOptions = filterData(_this.props.data, filter);
        var sortedOptions = sortFilteredData(filteredOptions, filter);
        var suggestions = sortedOptions.slice(0, 5);
        var suggestionIsFilter = sortedOptions.length === 1 && sortedOptions[0].value === filter.trim();
        var activeIsTooLarge = _this.state.activeSuggestionIndex > suggestions.length - 1;

        _this.setState({
          suggestions: suggestionIsFilter ? [] : [].concat(suggestions),
          activeSuggestionIndex: activeIsTooLarge ? suggestions.length - 1 : _this.state.activeSuggestionIndex
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
        var suggestions = _this.props.useCustomFilter ? _this.props.suggestions : _this.state.suggestions;

        if (suggestions.length !== 0 && e.keyCode === 38) {
          _this.setState({
            activeSuggestionIndex: _this.state.activeSuggestionIndex !== -1 ? _this.state.activeSuggestionIndex - 1 : -1
          });
        } else if (suggestions.length !== 0 && e.keyCode === 40) {
          _this.setState({
            activeSuggestionIndex: _this.state.activeSuggestionIndex !== suggestions.length - 1 ? _this.state.activeSuggestionIndex + 1 : suggestions.length - 1
          });
        } else if (e.keyCode === 13) {
          var filter = _this.state.activeSuggestionIndex > -1 ? suggestions[[_this.state.activeSuggestionIndex]].value : _this.state.filter;

          _this.onSubmit(filter);
        }
      });

      return _this;
    }

    var _proto = TypeAheadSearch.prototype;

    _proto.render = function render() {
      var _this2 = this;

      var suggestions = this.props.useCustomFilter ? this.props.suggestions : this.state.suggestions;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-type-ahead-search"
      }, /*#__PURE__*/React__default.createElement("i", {
        role: "button",
        tabIndex: 0,
        onClick: function onClick() {
          return _this2.onSubmit(_this2.state.filter);
        },
        className: "fa fa-search fa-fw molecules-type-ahead-search__magnifying-glass",
        "data-test": "magnifying-glass",
        "aria-label": "search"
      }), /*#__PURE__*/React__default.createElement("input", {
        type: "text",
        className: "molecules-type-ahead-search__search",
        "data-test": "search-input",
        placeholder: this.props.placeholder,
        value: this.state.filter,
        onChange: this.onInputChange,
        onKeyDown: this.handleKeyDown,
        "aria-label": "filter",
        "aria-describedby": this.props.placeholder
      }), suggestions.length > 0 && this.state.filter.length > 1 && /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-type-ahead-search__type-ahead",
        "data-test": "type-ahead-dropdown"
      }, suggestions.map(function (suggestion, index) {
        return /*#__PURE__*/React__default.createElement("p", {
          key: suggestion.value + "-" + suggestion.id,
          role: "presentation",
          onClick: function onClick() {
            return _this2.onSubmit(suggestion.value);
          },
          "data-test": "suggestion-" + suggestion.id,
          className: classNames('molecules-type-ahead-search__suggestion', {
            'molecules-type-ahead-search__suggestion--active': _this2.state.activeSuggestionIndex === index
          }),
          id: index
        }, _this2.getSuggestionText(suggestion.value));
      })));
    };

    return TypeAheadSearch;
  }(React__default.Component);

  _defineProperty(TypeAheadSearch, "propTypes", {
    onSubmit: PropTypes$1.func.isRequired,
    initialFilter: PropTypes$1.string,
    placeholder: PropTypes$1.string,
    useCustomFilter: PropTypes$1.bool,
    // Array of objects required if useCustomFilter is false
    data: customDataValidator,
    // Function required if useCustomFilter is true
    onChange: customOnChangeValidator,
    // Array of objects required if useCustomFilter is true
    suggestions: customSuggestionsValidator
  });

  _defineProperty(TypeAheadSearch, "defaultProps", {
    useCustomFilter: false,
    data: null,
    suggestions: null,
    initialFilter: '',
    placeholder: '',
    onChange: function onChange() {
      return null;
    }
  });

  var Tabs = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Tabs, _PureComponent);

    function Tabs() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Tabs.prototype;

    _proto.render = function render() {
      var _this = this;

      return /*#__PURE__*/React__default.createElement(ButtonGroup, null, this.props.tabs.map(function (tab, index) {
        var className = classNames('molecules-tab', {
          'molecules-tab--primary': _this.props.type === 'primary',
          'molecules-tab--secondary': _this.props.type === 'secondary',
          'molecules-tab--active': _this.props.activeIndex === index
        });
        return /*#__PURE__*/React__default.createElement("button", {
          className: className,
          onClick: function onClick() {
            return _this.props.onClick(index);
          },
          "data-unit-test": "tab",
          "data-test": "tab-" + index,
          key: tab
        }, tab);
      }));
    };

    return Tabs;
  }(React.PureComponent);

  _defineProperty(Tabs, "propTypes", {
    activeIndex: PropTypes$1.number.isRequired,
    onClick: PropTypes$1.func.isRequired,
    tabs: PropTypes$1.arrayOf(PropTypes$1.string).isRequired,
    type: PropTypes$1.oneOf(['primary', 'secondary'])
  });

  _defineProperty(Tabs, "defaultProps", {
    type: 'primary'
  });

  var Tooltip = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Tooltip, _PureComponent);

    function Tooltip() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "useWidthPreset", function () {
        return /^(small|medium|large)/.test(_this.props.width);
      });

      _defineProperty(_assertThisInitialized(_this), "useWidthValue", function () {
        return /^\d+(em|px)/.test(_this.props.width);
      });

      return _this;
    }

    var _proto = Tooltip.prototype;

    _proto.render = function render() {
      var _classNames;

      var tooltipClasses = classNames("molecules-tooltip molecules-tooltip--" + this.props.position + " molecules-tooltip--align-" + this.props.textAlign, (_classNames = {}, _classNames["molecules-tooltip--" + this.props.width] = this.useWidthPreset(), _classNames['molecules-tooltip--hover'] = this.props.hover, _classNames));
      var tooltipWrapperStyles = classNames('molecules-tooltip-wrapper', {
        'molecules-tooltip-wrapper--parent-width': !this.props.fitContent
      });
      var tooltipHoverStyle = classNames({
        'molecules-tooltip-wrapper__hover': this.props.hover
      });
      var tooltipStyle = this.useWidthValue() ? {
        width: this.props.width
      } : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: tooltipWrapperStyles
      }, /*#__PURE__*/React__default.createElement("span", {
        className: tooltipHoverStyle,
        tabIndex: this.props.hover ? 0 : -1
      }, this.props.children || /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-question-circle molecules-tooltip-wrapper__icon",
        "data-test": "tooltip-icon"
      })), !this.props.hide && /*#__PURE__*/React__default.createElement("div", {
        className: tooltipClasses,
        style: tooltipStyle,
        "data-test": "tooltip"
      }, this.props.tooltipContent));
    };

    return Tooltip;
  }(React.PureComponent);

  _defineProperty(Tooltip, "propTypes", {
    children: PropTypes$1.node,
    hide: PropTypes$1.bool,
    hover: PropTypes$1.bool,
    fitContent: PropTypes$1.bool,
    position: PropTypes$1.oneOf(['top', 'left', 'bottom', 'right']),
    textAlign: PropTypes$1.oneOf(['right', 'left', 'center']),
    tooltipContent: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]).isRequired,
    width: function width(props, propName) {
      if (props[propName] && !/^(small|medium|large)|\d+(em|px)/.test(props[propName])) {
        return new Error("Invalid prop " + propName + " supplied to Tooltip. Please supply 'small', 'medium', 'large', or a width measured in em or px.");
      }

      return null;
    }
  });

  _defineProperty(Tooltip, "defaultProps", {
    children: null,
    hide: false,
    hover: true,
    fitContent: true,
    position: 'top',
    textAlign: 'left',
    width: 'medium'
  });

  var CandidateSearchFilter = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(CandidateSearchFilter, _PureComponent);

    function CandidateSearchFilter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        expanded: _this.props.defaultExpanded
      });

      _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function () {
        _this.setState({
          expanded: !_this.state.expanded
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          _this.toggleExpanded();
        }
      });

      return _this;
    }

    var _proto = CandidateSearchFilter.prototype;

    _proto.render = function render() {
      var headerClasses = classNames('collapsable-box__header', {
        'collapsable-box__header--closed': !this.state.expanded
      });
      var scrollableClass = classNames({
        'collapsable-box__body--scrollable': this.props.scrollable
      });
      var iconClasses = classNames('fa collapsable-box__icon', {
        'fa-minus-square': this.state.expanded,
        'fa-plus-square': !this.state.expanded
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: "collapsable-box"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: headerClasses,
        "data-test": "collapsable-box-header"
      }, this.props.title, /*#__PURE__*/React__default.createElement("div", {
        role: "button",
        tabIndex: 0,
        onClick: this.toggleExpanded,
        onKeyDown: this.handleKeyDown,
        "data-test": "collapsable-box-icon-button"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: iconClasses,
        "data-test": "collapsable-box-icon"
      }))), this.state.expanded && /*#__PURE__*/React__default.createElement("div", {
        className: "collapsable-box__body",
        "data-test": "collapsable-box-body"
      }, this.props.nonScrollableContent && /*#__PURE__*/React__default.createElement("span", {
        "data-test": "collapsable-box-non-scrollable-content"
      }, this.props.nonScrollableContent), /*#__PURE__*/React__default.createElement("div", {
        className: scrollableClass,
        "data-test": "collapsable-box-children-container"
      }, this.props.children)));
    };

    return CandidateSearchFilter;
  }(React.PureComponent);

  _defineProperty(CandidateSearchFilter, "propTypes", {
    children: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.node), PropTypes$1.node]).isRequired,
    defaultExpanded: PropTypes$1.bool,
    nonScrollableContent: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.node), PropTypes$1.node]),
    title: PropTypes$1.string.isRequired,
    scrollable: PropTypes$1.bool
  });

  _defineProperty(CandidateSearchFilter, "defaultProps", {
    defaultExpanded: true,
    nonScrollableContent: null,
    scrollable: false
  });

  var Drawer = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Drawer, _PureComponent);

    function Drawer() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Drawer.prototype;

    _proto.render = function render() {
      var overlayClasses = classNames('molecules-drawer__overlay', {
        'molecules-drawer__overlay--hideForDesktop': this.props.hideForDesktop
      });
      var drawerClasses = classNames('molecules-drawer', {
        'molecules-drawer--hideForDesktop': this.props.hideForDesktop
      });
      return this.props.isOpen ? /*#__PURE__*/React__default.createElement("div", {
        className: overlayClasses,
        "data-test": "drawer-overlay"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: drawerClasses,
        "data-test": "drawer"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-drawer__header"
      }, /*#__PURE__*/React__default.createElement("i", {
        role: "button",
        tabIndex: "0",
        className: "fa fa-close drawer__exit-icon",
        onClick: this.props.onExitClick,
        "data-test": "exit-icon"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-drawer__title",
        "data-test": "title"
      }, this.props.title)), /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-drawer__body"
      }, this.props.children))) : null;
    };

    return Drawer;
  }(React.PureComponent);

  _defineProperty(Drawer, "defaultProps", {
    hideForDesktop: true
  });

  _defineProperty(Drawer, "propTypes", {
    title: PropTypes$1.string.isRequired,
    isOpen: PropTypes$1.bool.isRequired,
    children: PropTypes$1.node.isRequired,
    onExitClick: PropTypes$1.func.isRequired,
    hideForDesktop: PropTypes$1.bool
  });

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  /**
   * Check whether some DOM node is our Component's node.
   */
  function isNodeFound(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    } // SVG <use/> elements do not technically reside in the rendered DOM, so
    // they do not have classList directly, but they offer a link to their
    // corresponding element, which can have classList. This extra check is for
    // that case.
    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


    if (current.correspondingElement) {
      return current.correspondingElement.classList.contains(ignoreClass);
    }

    return current.classList.contains(ignoreClass);
  }
  /**
   * Try to find our node in a hierarchy of nodes, returning the document
   * node as highest node if our node is not found in the path up.
   */

  function findHighest(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    } // If source=local then this event came from 'somewhere'
    // inside and should be ignored. We could handle this with
    // a layered approach, too, but that requires going back to
    // thinking in terms of Dom node nesting, running counter
    // to React's 'you shouldn't care about the DOM' philosophy.


    while (current.parentNode) {
      if (isNodeFound(current, componentNode, ignoreClass)) {
        return true;
      }

      current = current.parentNode;
    }

    return current;
  }
  /**
   * Check if the browser scrollbar was clicked
   */

  function clickedScrollbar(evt) {
    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
  }

  // ideally will get replaced with external dep
  // when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
  var testPassiveEventSupport = function testPassiveEventSupport() {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
      return;
    }

    var passive = false;
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passive = true;
      }
    });

    var noop = function noop() {};

    window.addEventListener('testPassiveEventSupport', noop, options);
    window.removeEventListener('testPassiveEventSupport', noop, options);
    return passive;
  };

  function autoInc(seed) {
    if (seed === void 0) {
      seed = 0;
    }

    return function () {
      return ++seed;
    };
  }

  var uid = autoInc();

  var passiveEventSupport;
  var handlersMap = {};
  var enabledInstances = {};
  var touchEvents = ['touchstart', 'touchmove'];
  var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
  /**
   * This function generates the HOC function that you'll use
   * in order to impart onOutsideClick listening to an
   * arbitrary component. It gets called at the end of the
   * bootstrapping code to yield an instance of the
   * onClickOutsideHOC function defined inside setupHOC().
   */

  function onClickOutsideHOC(WrappedComponent, config) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose$1(onClickOutside, _Component);

      function onClickOutside(props) {
        var _this;

        _this = _Component.call(this, props) || this;

        _this.__outsideClickHandler = function (event) {
          if (typeof _this.__clickOutsideHandlerProp === 'function') {
            _this.__clickOutsideHandlerProp(event);

            return;
          }

          var instance = _this.getInstance();

          if (typeof instance.props.handleClickOutside === 'function') {
            instance.props.handleClickOutside(event);
            return;
          }

          if (typeof instance.handleClickOutside === 'function') {
            instance.handleClickOutside(event);
            return;
          }

          throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
        };

        _this.enableOnClickOutside = function () {
          if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
            return;
          }

          if (typeof passiveEventSupport === 'undefined') {
            passiveEventSupport = testPassiveEventSupport();
          }

          enabledInstances[_this._uid] = true;
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          handlersMap[_this._uid] = function (event) {
            if (_this.props.disableOnClickOutside) return;
            if (_this.componentNode === null) return;

            if (_this.props.preventDefault) {
              event.preventDefault();
            }

            if (_this.props.stopPropagation) {
              event.stopPropagation();
            }

            if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
            var current = event.target;

            if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
              return;
            }

            _this.__outsideClickHandler(event);
          };

          events.forEach(function (eventName) {
            var handlerOptions = null;
            var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

            if (isTouchEvent && passiveEventSupport) {
              handlerOptions = {
                passive: !_this.props.preventDefault
              };
            }

            document.addEventListener(eventName, handlersMap[_this._uid], handlerOptions);
          });
        };

        _this.disableOnClickOutside = function () {
          delete enabledInstances[_this._uid];
          var fn = handlersMap[_this._uid];

          if (fn && typeof document !== 'undefined') {
            var events = _this.props.eventTypes;

            if (!events.forEach) {
              events = [events];
            }

            events.forEach(function (eventName) {
              return document.removeEventListener(eventName, fn);
            });
            delete handlersMap[_this._uid];
          }
        };

        _this.getRef = function (ref) {
          return _this.instanceRef = ref;
        };

        _this._uid = uid();
        return _this;
      }
      /**
       * Access the WrappedComponent's instance.
       */


      var _proto = onClickOutside.prototype;

      _proto.getInstance = function getInstance() {
        if (!WrappedComponent.prototype.isReactComponent) {
          return this;
        }

        var ref = this.instanceRef;
        return ref.getInstance ? ref.getInstance() : ref;
      };

      /**
       * Add click listeners to the current document,
       * linked to this component's state.
       */
      _proto.componentDidMount = function componentDidMount() {
        // If we are in an environment without a DOM such
        // as shallow rendering or snapshots then we exit
        // early to prevent any unhandled errors being thrown.
        if (typeof document === 'undefined' || !document.createElement) {
          return;
        }

        var instance = this.getInstance();

        if (config && typeof config.handleClickOutside === 'function') {
          this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

          if (typeof this.__clickOutsideHandlerProp !== 'function') {
            throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
          }
        }

        this.componentNode = ReactDOM.findDOMNode(this.getInstance());
        this.enableOnClickOutside();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        this.componentNode = ReactDOM.findDOMNode(this.getInstance());
      };
      /**
       * Remove all document's event listeners for this component
       */


      _proto.componentWillUnmount = function componentWillUnmount() {
        this.disableOnClickOutside();
      };
      /**
       * Can be called to explicitly enable event listening
       * for clicks and touches outside of this element.
       */


      /**
       * Pass-through render
       */
      _proto.render = function render() {
        // eslint-disable-next-line no-unused-vars
        var _props = this.props,
            excludeScrollbar = _props.excludeScrollbar,
            props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

        if (WrappedComponent.prototype.isReactComponent) {
          props.ref = this.getRef;
        } else {
          props.wrappedRef = this.getRef;
        }

        props.disableOnClickOutside = this.disableOnClickOutside;
        props.enableOnClickOutside = this.enableOnClickOutside;
        return React.createElement(WrappedComponent, props);
      };

      return onClickOutside;
    }(React.Component), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
      eventTypes: ['mousedown', 'touchstart'],
      excludeScrollbar: config && config.excludeScrollbar || false,
      outsideClickIgnoreClass: IGNORE_CLASS_NAME,
      preventDefault: false,
      stopPropagation: false
    }, _class.getClass = function () {
      return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
    }, _temp;
  }

  var Dropdown = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(Dropdown, _PureComponent);

    function Dropdown() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        activeSuggestionIndex: -1
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
        if (e.keyCode === 38) {
          _this.setState({
            activeSuggestionIndex: _this.state.activeSuggestionIndex !== -1 ? _this.state.activeSuggestionIndex - 1 : -1
          });
        } else if (e.keyCode === 40) {
          _this.setState({
            activeSuggestionIndex: _this.state.activeSuggestionIndex !== _this.props.options.length - 1 ? _this.state.activeSuggestionIndex + 1 : _this.props.options.length - 1
          });
        } else if (e.keyCode === 13) {
          if (_this.state.activeSuggestionIndex > -1) {
            _this.handleClick(_this.props.options[_this.state.activeSuggestionIndex]);
          } else {
            _this.toggleDropdown();
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleClick", function (item, e) {
        if (e) e.preventDefault();

        _this.setState({
          activeSuggestionIndex: -1,
          showDropdown: false
        });

        item.onClick();
      });

      _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
        _this.setState({
          showDropdown: false
        });
      });

      _defineProperty(_assertThisInitialized(_this), "toggleDropdown", function (e) {
        if (e) e.preventDefault();

        _this.setState({
          showDropdown: !_this.state.showDropdown
        });
      });

      return _this;
    }

    var _proto = Dropdown.prototype;

    _proto.render = function render() {
      var _this2 = this;

      return /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-dropdown"
      }, /*#__PURE__*/React__default.createElement("div", {
        role: "button",
        tabIndex: 0,
        onClick: this.toggleDropdown,
        className: "molecules-dropdown__selection",
        onKeyDown: function onKeyDown(e) {
          return _this2.handleKeyDown(e);
        },
        "data-test": "dropdown-toggle"
      }, this.props.selectedOptionId && /*#__PURE__*/React__default.createElement("span", {
        "data-test": "selected-text"
      }, this.props.options.find(function (option) {
        return option.id === _this2.props.selectedOptionId;
      }).display), !this.props.selectedOptionId && /*#__PURE__*/React__default.createElement("span", {
        className: "molecules-dropdown__placeholder",
        "data-test": "placeholder"
      }, this.props.placeholderText), /*#__PURE__*/React__default.createElement("i", {
        className: classNames('fa fa-fw', {
          'fa-chevron-down': !this.state.showDropdown,
          'fa-chevron-up': this.state.showDropdown
        })
      })), this.state.showDropdown && /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-dropdown__items",
        "data-test": "dropdown"
      }, this.props.options.map(function (item, index) {
        return /*#__PURE__*/React__default.createElement("p", {
          key: item.id,
          role: "presentation",
          onClick: function onClick(e) {
            return _this2.handleClick(item, e);
          },
          className: classNames('molecules-dropdown__item', {
            'molecules-dropdown__item--active': _this2.state.activeSuggestionIndex === index
          }),
          "data-test": "dropdown-item",
          "data-value": item.display
        }, item.display);
      })));
    };

    return Dropdown;
  }(React.PureComponent); // Exported for testing


  _defineProperty(Dropdown, "propTypes", {
    placeholderText: PropTypes$1.string,
    selectedOptionId: PropTypes$1.number,
    options: PropTypes$1.arrayOf(PropTypes$1.shape({
      display: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.node]),
      onClick: PropTypes$1.func,
      id: PropTypes$1.number
    })).isRequired
  });

  _defineProperty(Dropdown, "defaultProps", {
    placeholderText: 'Select an option',
    selectedOptionId: null,
    showDropdown: false
  });
  var Dropdown$1 = onClickOutsideHOC(Dropdown);

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Portal = function (_React$Component) {
    _inherits(Portal, _React$Component);

    function Portal() {
      _classCallCheck(this, Portal);

      return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
    }

    _createClass(Portal, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.defaultNode) {
          document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
      }
    }, {
      key: 'render',
      value: function render() {
        if (!canUseDOM) {
          return null;
        }
        if (!this.props.node && !this.defaultNode) {
          this.defaultNode = document.createElement('div');
          document.body.appendChild(this.defaultNode);
        }
        return ReactDOM__default.createPortal(this.props.children, this.props.node || this.defaultNode);
      }
    }]);

    return Portal;
  }(React__default.Component);

  Portal.propTypes = {
    children: PropTypes$1.node.isRequired,
    node: PropTypes$1.any
  };

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Portal$1 = function (_React$Component) {
    _inherits$1(Portal, _React$Component);

    function Portal() {
      _classCallCheck$1(this, Portal);

      return _possibleConstructorReturn$1(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
    }

    _createClass$1(Portal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.renderPortal();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(props) {
        this.renderPortal();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        ReactDOM__default.unmountComponentAtNode(this.defaultNode || this.props.node);
        if (this.defaultNode) {
          document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
        this.portal = null;
      }
    }, {
      key: 'renderPortal',
      value: function renderPortal(props) {
        if (!this.props.node && !this.defaultNode) {
          this.defaultNode = document.createElement('div');
          document.body.appendChild(this.defaultNode);
        }

        var children = this.props.children;
        // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
        if (typeof this.props.children.type === 'function') {
          children = React__default.cloneElement(this.props.children);
        }

        this.portal = ReactDOM__default.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return Portal;
  }(React__default.Component);


  Portal$1.propTypes = {
    children: PropTypes$1.node.isRequired,
    node: PropTypes$1.any
  };

  var Portal$2 = void 0;

  if (ReactDOM__default.createPortal) {
    Portal$2 = Portal;
  } else {
    Portal$2 = Portal$1;
  }

  var Portal$3 = Portal$2;

  var Modal = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Modal, _Component);

    function Modal() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "onEscKeyDown", function (e) {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
          _this.props.onClose();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onBackdropClick", function (e) {
        var _this$props = _this.props,
            showOverlay = _this$props.showOverlay,
            closeOnOverlayClick = _this$props.closeOnOverlayClick;
        var id = e.target.id;

        if (showOverlay && closeOnOverlayClick && id === 'backdrop') {
          _this.props.onClose();
        }
      });

      return _this;
    }

    var _proto = Modal.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (this.props.closeOnEsc) {
        window.addEventListener('keydown', this.onEscKeyDown, false);
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        window.removeEventListener('keydown', this.onEscKeyDown, false);
      }
    }
    /**
     * Function thats responsible for "closeOnEsc"
     */
    ;

    _proto.render = function render() {
      var _this$props2 = this.props,
          isOpen = _this$props2.isOpen,
          onClose = _this$props2.onClose,
          showOverlay = _this$props2.showOverlay,
          isLoadingContent = _this$props2.isLoadingContent,
          variant = _this$props2.variant;
      var backdropClasses = classNames({
        'molecules-modal': true,
        modal__backdrop: showOverlay,
        'is-open': isOpen,
        fadeIn: isOpen
      });
      var dialogClasses = classNames({
        modal__dialog: true,
        'modal__dialog--default': variant === 'default',
        'modal__dialog--wide': variant === 'wide',
        'modal__dialog--full': variant === 'full'
      });
      var childrenWithProps = !isLoadingContent ? React__default.Children.map(this.props.children, function (child) {
        return /*#__PURE__*/React__default.cloneElement(child, {
          onClose: onClose
        });
      }) : /*#__PURE__*/React__default.createElement(Loader, {
        inline: true
      });

      if (isOpen) {
        return /*#__PURE__*/React__default.createElement(Portal$3, {
          "data-test": "modal"
        }, /*#__PURE__*/React__default.createElement("div", {
          id: "backdrop",
          className: backdropClasses,
          role: "dialog",
          onClick: this.onBackdropClick
        }, /*#__PURE__*/React__default.createElement("div", {
          id: "dialog",
          className: dialogClasses,
          tabIndex: "-1",
          "aria-labelledby": this.props.aria
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "dialog-container"
        }, childrenWithProps))));
      }

      return null;
    };

    return Modal;
  }(React.Component);

  _defineProperty(Modal, "propTypes", {
    // String for the "aria-labeledby" attribute of the modal
    aria: PropTypes$1.string,
    // React components rendered inside the modal
    children: PropTypes$1.node.isRequired,
    // Whether or not we should close the modal when the "ESC" key is hit.
    closeOnEsc: PropTypes$1.bool,
    // Whether or not we should close them modal when the modal overlay is clicked.
    closeOnOverlayClick: PropTypes$1.bool,
    // If we're loading content, we can display a generic loading icon here.
    isLoadingContent: PropTypes$1.bool,
    // REQUIRED. When or not the modal is open.
    isOpen: PropTypes$1.bool.isRequired,
    // REQUIRED. Function to close the modal.
    onClose: PropTypes$1.func.isRequired,
    // Whether or not to show the modal overlay
    showOverlay: PropTypes$1.bool,
    // The size of the modal
    variant: PropTypes$1.oneOf(['default', 'wide', 'full'])
  });

  _defineProperty(Modal, "defaultProps", {
    aria: 'Modal Dialog',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isLoadingContent: false,
    isOpen: false,
    showOverlay: true,
    variant: 'default'
  });

  var ModalBody = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(ModalBody, _PureComponent);

    function ModalBody() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = ModalBody.prototype;

    _proto.render = function render() {
      var children = this.props.children;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "modal-body",
        "data-test": "modal-body"
      }, children);
    };

    return ModalBody;
  }(React.PureComponent);

  _defineProperty(ModalBody, "propTypes", {
    // React components rendered inside the modal
    // eslint-disable-next-line react/require-default-props
    children: PropTypes$1.node
  });

  var ModalHeader = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(ModalHeader, _PureComponent);

    function ModalHeader() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "renderTitle", function () {
        var children = _this.props.children;

        if (typeof children === 'string') {
          return /*#__PURE__*/React__default.createElement("h2", null, children);
        }

        return children;
      });

      return _this;
    }

    var _proto = ModalHeader.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          hideCloseIcon = _this$props.hideCloseIcon,
          onClose = _this$props.onClose,
          centered = _this$props.centered;
      var modalHeaderClasses = classNames('modal-header', {
        'modal-header--centered': centered
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: modalHeaderClasses,
        "data-test": "modal-header"
      }, this.renderTitle(), !hideCloseIcon && /*#__PURE__*/React__default.createElement("div", {
        className: "modal-header__icon-wrapper"
      }, /*#__PURE__*/React__default.createElement("i", {
        role: "link",
        tabIndex: 0,
        className: "fa fa-close",
        onClick: onClose
      })));
    };

    return ModalHeader;
  }(React.PureComponent);

  _defineProperty(ModalHeader, "propTypes", {
    // Optional prop for showing the modal "x" for closing it
    hideCloseIcon: PropTypes$1.bool,
    // Center the title in the modal
    centered: PropTypes$1.bool,
    // Function to close the modal - used by close icon
    // eslint-disable-next-line react/require-default-props
    onClose: function onClose(props, propName, componentName) {
      if (!props.hideCloseIcon && typeof props.onClose !== 'function') {
        throw new Error(componentName + " must recieve a valid function for " + propName + " when hideCloseIcon is false");
      }
    },
    // React components rendered inside the modal header
    children: PropTypes$1.node
  });

  _defineProperty(ModalHeader, "defaultProps", {
    hideCloseIcon: false,
    centered: false
  });

  var ModalFooter = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(ModalFooter, _PureComponent);

    function ModalFooter() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = ModalFooter.prototype;

    _proto.render = function render() {
      var children = this.props.children;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "modal-footer",
        "data-test": "modal-footer"
      }, children);
    };

    return ModalFooter;
  }(React.PureComponent);

  _defineProperty(ModalFooter, "propTypes", {
    // React components rendered inside the modal
    // eslint-disable-next-line react/require-default-props
    children: PropTypes$1.node
  });

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized$1;

  function _inheritsLoose$2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose$2;

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty$1;

  var toStr = Object.prototype.toString;

  var isArguments = function isArguments(value) {
  	var str = toStr.call(value);
  	var isArgs = str === '[object Arguments]';
  	if (!isArgs) {
  		isArgs = str !== '[object Array]' &&
  			value !== null &&
  			typeof value === 'object' &&
  			typeof value.length === 'number' &&
  			value.length >= 0 &&
  			toStr.call(value.callee) === '[object Function]';
  	}
  	return isArgs;
  };

  var keysShim;
  if (!Object.keys) {
  	// modified from https://github.com/es-shims/es5-shim
  	var has = Object.prototype.hasOwnProperty;
  	var toStr$1 = Object.prototype.toString;
  	var isArgs = isArguments; // eslint-disable-line global-require
  	var isEnumerable = Object.prototype.propertyIsEnumerable;
  	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
  	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  	var dontEnums = [
  		'toString',
  		'toLocaleString',
  		'valueOf',
  		'hasOwnProperty',
  		'isPrototypeOf',
  		'propertyIsEnumerable',
  		'constructor'
  	];
  	var equalsConstructorPrototype = function (o) {
  		var ctor = o.constructor;
  		return ctor && ctor.prototype === o;
  	};
  	var excludedKeys = {
  		$applicationCache: true,
  		$console: true,
  		$external: true,
  		$frame: true,
  		$frameElement: true,
  		$frames: true,
  		$innerHeight: true,
  		$innerWidth: true,
  		$onmozfullscreenchange: true,
  		$onmozfullscreenerror: true,
  		$outerHeight: true,
  		$outerWidth: true,
  		$pageXOffset: true,
  		$pageYOffset: true,
  		$parent: true,
  		$scrollLeft: true,
  		$scrollTop: true,
  		$scrollX: true,
  		$scrollY: true,
  		$self: true,
  		$webkitIndexedDB: true,
  		$webkitStorageInfo: true,
  		$window: true
  	};
  	var hasAutomationEqualityBug = (function () {
  		/* global window */
  		if (typeof window === 'undefined') { return false; }
  		for (var k in window) {
  			try {
  				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
  					try {
  						equalsConstructorPrototype(window[k]);
  					} catch (e) {
  						return true;
  					}
  				}
  			} catch (e) {
  				return true;
  			}
  		}
  		return false;
  	}());
  	var equalsConstructorPrototypeIfNotBuggy = function (o) {
  		/* global window */
  		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
  			return equalsConstructorPrototype(o);
  		}
  		try {
  			return equalsConstructorPrototype(o);
  		} catch (e) {
  			return false;
  		}
  	};

  	keysShim = function keys(object) {
  		var isObject = object !== null && typeof object === 'object';
  		var isFunction = toStr$1.call(object) === '[object Function]';
  		var isArguments = isArgs(object);
  		var isString = isObject && toStr$1.call(object) === '[object String]';
  		var theKeys = [];

  		if (!isObject && !isFunction && !isArguments) {
  			throw new TypeError('Object.keys called on a non-object');
  		}

  		var skipProto = hasProtoEnumBug && isFunction;
  		if (isString && object.length > 0 && !has.call(object, 0)) {
  			for (var i = 0; i < object.length; ++i) {
  				theKeys.push(String(i));
  			}
  		}

  		if (isArguments && object.length > 0) {
  			for (var j = 0; j < object.length; ++j) {
  				theKeys.push(String(j));
  			}
  		} else {
  			for (var name in object) {
  				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
  					theKeys.push(String(name));
  				}
  			}
  		}

  		if (hasDontEnumBug) {
  			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

  			for (var k = 0; k < dontEnums.length; ++k) {
  				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
  					theKeys.push(dontEnums[k]);
  				}
  			}
  		}
  		return theKeys;
  	};
  }
  var implementation = keysShim;

  var slice = Array.prototype.slice;


  var origKeys = Object.keys;
  var keysShim$1 = origKeys ? function keys(o) { return origKeys(o); } : implementation;

  var originalKeys = Object.keys;

  keysShim$1.shim = function shimObjectKeys() {
  	if (Object.keys) {
  		var keysWorksWithArguments = (function () {
  			// Safari 5.0 bug
  			var args = Object.keys(arguments);
  			return args && args.length === arguments.length;
  		}(1, 2));
  		if (!keysWorksWithArguments) {
  			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
  				if (isArguments(object)) {
  					return originalKeys(slice.call(object));
  				}
  				return originalKeys(object);
  			};
  		}
  	} else {
  		Object.keys = keysShim$1;
  	}
  	return Object.keys || keysShim$1;
  };

  var objectKeys = keysShim$1;

  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  var toStr$2 = Object.prototype.toString;

  var isStandardArguments = function isArguments(value) {
  	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
  		return false;
  	}
  	return toStr$2.call(value) === '[object Arguments]';
  };

  var isLegacyArguments = function isArguments(value) {
  	if (isStandardArguments(value)) {
  		return true;
  	}
  	return value !== null &&
  		typeof value === 'object' &&
  		typeof value.length === 'number' &&
  		value.length >= 0 &&
  		toStr$2.call(value) !== '[object Array]' &&
  		toStr$2.call(value.callee) === '[object Function]';
  };

  var supportsStandardArguments = (function () {
  	return isStandardArguments(arguments);
  }());

  isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

  var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

  var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

  var toStr$3 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;

  var isFunction = function (fn) {
  	return typeof fn === 'function' && toStr$3.call(fn) === '[object Function]';
  };

  var arePropertyDescriptorsSupported = function () {
  	var obj = {};
  	try {
  		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
  		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
  		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
  			return false;
  		}
  		return obj.x === obj;
  	} catch (e) { /* this is IE 8. */
  		return false;
  	}
  };
  var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

  var defineProperty$1 = function (object, name, value, predicate) {
  	if (name in object && (!isFunction(predicate) || !predicate())) {
  		return;
  	}
  	if (supportsDescriptors) {
  		origDefineProperty(object, name, {
  			configurable: true,
  			enumerable: false,
  			value: value,
  			writable: true
  		});
  	} else {
  		object[name] = value;
  	}
  };

  var defineProperties = function (object, map) {
  	var predicates = arguments.length > 2 ? arguments[2] : {};
  	var props = objectKeys(map);
  	if (hasSymbols) {
  		props = concat.call(props, Object.getOwnPropertySymbols(map));
  	}
  	for (var i = 0; i < props.length; i += 1) {
  		defineProperty$1(object, props[i], map[props[i]], predicates[props[i]]);
  	}
  };

  defineProperties.supportsDescriptors = !!supportsDescriptors;

  var defineProperties_1 = defineProperties;

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice$1 = Array.prototype.slice;
  var toStr$4 = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation$1 = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr$4.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice$1.call(arguments, 1);

      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice$1.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice$1.call(arguments))
              );
          }
      };

      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }

      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }

      return bound;
  };

  var functionBind = Function.prototype.bind || implementation$1;

  /* eslint complexity: [2, 18], max-statements: [2, 33] */
  var shams = function hasSymbols() {
  	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
  	if (typeof Symbol.iterator === 'symbol') { return true; }

  	var obj = {};
  	var sym = Symbol('test');
  	var symObj = Object(sym);
  	if (typeof sym === 'string') { return false; }

  	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
  	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

  	// temp disabled per https://github.com/ljharb/object.assign/issues/17
  	// if (sym instanceof Symbol) { return false; }
  	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  	// if (!(symObj instanceof Symbol)) { return false; }

  	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
  	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  	var symVal = 42;
  	obj[sym] = symVal;
  	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
  	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

  	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

  	var syms = Object.getOwnPropertySymbols(obj);
  	if (syms.length !== 1 || syms[0] !== sym) { return false; }

  	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

  	if (typeof Object.getOwnPropertyDescriptor === 'function') {
  		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
  		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
  	}

  	return true;
  };

  var origSymbol = commonjsGlobal.Symbol;


  var hasSymbols$1 = function hasNativeSymbols() {
  	if (typeof origSymbol !== 'function') { return false; }
  	if (typeof Symbol !== 'function') { return false; }
  	if (typeof origSymbol('foo') !== 'symbol') { return false; }
  	if (typeof Symbol('bar') !== 'symbol') { return false; }

  	return shams();
  };

  /* globals
  	Atomics,
  	SharedArrayBuffer,
  */

  var undefined$1;

  var $TypeError = TypeError;

  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
  	try {
  		$gOPD({}, '');
  	} catch (e) {
  		$gOPD = null; // this is IE 8, which has a broken gOPD
  	}
  }

  var throwTypeError = function () { throw new $TypeError(); };
  var ThrowTypeError = $gOPD
  	? (function () {
  		try {
  			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
  			arguments.callee; // IE 8 does not throw here
  			return throwTypeError;
  		} catch (calleeThrows) {
  			try {
  				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
  				return $gOPD(arguments, 'callee').get;
  			} catch (gOPDthrows) {
  				return throwTypeError;
  			}
  		}
  	}())
  	: throwTypeError;

  var hasSymbols$2 = hasSymbols$1();

  var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto
  var generatorFunction =  undefined$1;
  var asyncFunction =  undefined$1;
  var asyncGenFunction =  undefined$1;

  var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

  var INTRINSICS = {
  	'%Array%': Array,
  	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer.prototype,
  	'%ArrayIteratorPrototype%': hasSymbols$2 ? getProto([][Symbol.iterator]()) : undefined$1,
  	'%ArrayPrototype%': Array.prototype,
  	'%ArrayProto_entries%': Array.prototype.entries,
  	'%ArrayProto_forEach%': Array.prototype.forEach,
  	'%ArrayProto_keys%': Array.prototype.keys,
  	'%ArrayProto_values%': Array.prototype.values,
  	'%AsyncFromSyncIteratorPrototype%': undefined$1,
  	'%AsyncFunction%': asyncFunction,
  	'%AsyncFunctionPrototype%':  undefined$1,
  	'%AsyncGenerator%':  undefined$1,
  	'%AsyncGeneratorFunction%': asyncGenFunction,
  	'%AsyncGeneratorPrototype%':  undefined$1,
  	'%AsyncIteratorPrototype%':  undefined$1,
  	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  	'%Boolean%': Boolean,
  	'%BooleanPrototype%': Boolean.prototype,
  	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined$1 : DataView.prototype,
  	'%Date%': Date,
  	'%DatePrototype%': Date.prototype,
  	'%decodeURI%': decodeURI,
  	'%decodeURIComponent%': decodeURIComponent,
  	'%encodeURI%': encodeURI,
  	'%encodeURIComponent%': encodeURIComponent,
  	'%Error%': Error,
  	'%ErrorPrototype%': Error.prototype,
  	'%eval%': eval, // eslint-disable-line no-eval
  	'%EvalError%': EvalError,
  	'%EvalErrorPrototype%': EvalError.prototype,
  	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array.prototype,
  	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array.prototype,
  	'%Function%': Function,
  	'%FunctionPrototype%': Function.prototype,
  	'%Generator%':  undefined$1,
  	'%GeneratorFunction%': generatorFunction,
  	'%GeneratorPrototype%':  undefined$1,
  	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array.prototype,
  	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined$1 : Int8Array.prototype,
  	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array.prototype,
  	'%isFinite%': isFinite,
  	'%isNaN%': isNaN,
  	'%IteratorPrototype%': hasSymbols$2 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
  	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined$1,
  	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  	'%MapPrototype%': typeof Map === 'undefined' ? undefined$1 : Map.prototype,
  	'%Math%': Math,
  	'%Number%': Number,
  	'%NumberPrototype%': Number.prototype,
  	'%Object%': Object,
  	'%ObjectPrototype%': Object.prototype,
  	'%ObjProto_toString%': Object.prototype.toString,
  	'%ObjProto_valueOf%': Object.prototype.valueOf,
  	'%parseFloat%': parseFloat,
  	'%parseInt%': parseInt,
  	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype,
  	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype.then,
  	'%Promise_all%': typeof Promise === 'undefined' ? undefined$1 : Promise.all,
  	'%Promise_reject%': typeof Promise === 'undefined' ? undefined$1 : Promise.reject,
  	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined$1 : Promise.resolve,
  	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  	'%RangeError%': RangeError,
  	'%RangeErrorPrototype%': RangeError.prototype,
  	'%ReferenceError%': ReferenceError,
  	'%ReferenceErrorPrototype%': ReferenceError.prototype,
  	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  	'%RegExp%': RegExp,
  	'%RegExpPrototype%': RegExp.prototype,
  	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  	'%SetPrototype%': typeof Set === 'undefined' ? undefined$1 : Set.prototype,
  	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer.prototype,
  	'%String%': String,
  	'%StringIteratorPrototype%': hasSymbols$2 ? getProto(''[Symbol.iterator]()) : undefined$1,
  	'%StringPrototype%': String.prototype,
  	'%Symbol%': hasSymbols$2 ? Symbol : undefined$1,
  	'%SymbolPrototype%': hasSymbols$2 ? Symbol.prototype : undefined$1,
  	'%SyntaxError%': SyntaxError,
  	'%SyntaxErrorPrototype%': SyntaxError.prototype,
  	'%ThrowTypeError%': ThrowTypeError,
  	'%TypedArray%': TypedArray,
  	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined$1,
  	'%TypeError%': $TypeError,
  	'%TypeErrorPrototype%': $TypeError.prototype,
  	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array.prototype,
  	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray.prototype,
  	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array.prototype,
  	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array.prototype,
  	'%URIError%': URIError,
  	'%URIErrorPrototype%': URIError.prototype,
  	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap.prototype,
  	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,
  	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet.prototype
  };


  var $replace = functionBind.call(Function.call, String.prototype.replace);

  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
  var stringToPath = function stringToPath(string) {
  	var result = [];
  	$replace(string, rePropName, function (match, number, quote, subString) {
  		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
  	});
  	return result;
  };
  /* end adaptation */

  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  	if (!(name in INTRINSICS)) {
  		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
  	}

  	// istanbul ignore if // hopefully this is impossible to test :-)
  	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
  		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  	}

  	return INTRINSICS[name];
  };

  var GetIntrinsic = function GetIntrinsic(name, allowMissing) {
  	if (typeof name !== 'string' || name.length === 0) {
  		throw new TypeError('intrinsic name must be a non-empty string');
  	}
  	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
  		throw new TypeError('"allowMissing" argument must be a boolean');
  	}

  	var parts = stringToPath(name);

  	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
  	for (var i = 1; i < parts.length; i += 1) {
  		if (value != null) {
  			if ($gOPD && (i + 1) >= parts.length) {
  				var desc = $gOPD(value, parts[i]);
  				if (!allowMissing && !(parts[i] in value)) {
  					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
  				}
  				value = desc ? (desc.get || desc.value) : value[parts[i]];
  			} else {
  				value = value[parts[i]];
  			}
  		}
  	}
  	return value;
  };

  var $apply = GetIntrinsic('%Function.prototype.apply%');
  var $call = GetIntrinsic('%Function.prototype.call%');
  var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);

  var callBind = function callBind() {
  	return $reflectApply(functionBind, $call, arguments);
  };

  var apply = function applyBind() {
  	return $reflectApply(functionBind, $apply, arguments);
  };
  callBind.apply = apply;

  var numberIsNaN = function (value) {
  	return value !== value;
  };

  var implementation$2 = function is(a, b) {
  	if (a === 0 && b === 0) {
  		return 1 / a === 1 / b;
  	}
  	if (a === b) {
  		return true;
  	}
  	if (numberIsNaN(a) && numberIsNaN(b)) {
  		return true;
  	}
  	return false;
  };

  var polyfill = function getPolyfill() {
  	return typeof Object.is === 'function' ? Object.is : implementation$2;
  };

  var shim = function shimObjectIs() {
  	var polyfill$1 = polyfill();
  	defineProperties_1(Object, { is: polyfill$1 }, {
  		is: function testObjectIs() {
  			return Object.is !== polyfill$1;
  		}
  	});
  	return polyfill$1;
  };

  var polyfill$1 = callBind(polyfill(), Object);

  defineProperties_1(polyfill$1, {
  	getPolyfill: polyfill,
  	implementation: implementation$2,
  	shim: shim
  });

  var objectIs = polyfill$1;

  var hasSymbols$3 = hasSymbols$1();
  var hasToStringTag$1 = hasSymbols$3 && typeof Symbol.toStringTag === 'symbol';
  var regexExec;
  var isRegexMarker;
  var badStringifier;

  if (hasToStringTag$1) {
  	regexExec = Function.call.bind(RegExp.prototype.exec);
  	isRegexMarker = {};

  	var throwRegexMarker = function () {
  		throw isRegexMarker;
  	};
  	badStringifier = {
  		toString: throwRegexMarker,
  		valueOf: throwRegexMarker
  	};

  	if (typeof Symbol.toPrimitive === 'symbol') {
  		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
  	}
  }

  var toStr$5 = Object.prototype.toString;
  var regexClass = '[object RegExp]';

  var isRegex = hasToStringTag$1
  	// eslint-disable-next-line consistent-return
  	? function isRegex(value) {
  		if (!value || typeof value !== 'object') {
  			return false;
  		}

  		try {
  			regexExec(value, badStringifier);
  		} catch (e) {
  			return e === isRegexMarker;
  		}
  	}
  	: function isRegex(value) {
  		// In older browsers, typeof regex incorrectly returns 'function'
  		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
  			return false;
  		}

  		return toStr$5.call(value) === regexClass;
  	};

  var $Object = Object;
  var $TypeError$1 = TypeError;

  var implementation$3 = function flags() {
  	if (this != null && this !== $Object(this)) {
  		throw new $TypeError$1('RegExp.prototype.flags getter called on non-object');
  	}
  	var result = '';
  	if (this.global) {
  		result += 'g';
  	}
  	if (this.ignoreCase) {
  		result += 'i';
  	}
  	if (this.multiline) {
  		result += 'm';
  	}
  	if (this.dotAll) {
  		result += 's';
  	}
  	if (this.unicode) {
  		result += 'u';
  	}
  	if (this.sticky) {
  		result += 'y';
  	}
  	return result;
  };

  var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
  var $gOPD$1 = Object.getOwnPropertyDescriptor;
  var $TypeError$2 = TypeError;

  var polyfill$2 = function getPolyfill() {
  	if (!supportsDescriptors$1) {
  		throw new $TypeError$2('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  	}
  	if ((/a/mig).flags === 'gim') {
  		var descriptor = $gOPD$1(RegExp.prototype, 'flags');
  		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
  			return descriptor.get;
  		}
  	}
  	return implementation$3;
  };

  var supportsDescriptors$2 = defineProperties_1.supportsDescriptors;

  var gOPD = Object.getOwnPropertyDescriptor;
  var defineProperty$2 = Object.defineProperty;
  var TypeErr = TypeError;
  var getProto$1 = Object.getPrototypeOf;
  var regex = /a/;

  var shim$1 = function shimFlags() {
  	if (!supportsDescriptors$2 || !getProto$1) {
  		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  	}
  	var polyfill = polyfill$2();
  	var proto = getProto$1(regex);
  	var descriptor = gOPD(proto, 'flags');
  	if (!descriptor || descriptor.get !== polyfill) {
  		defineProperty$2(proto, 'flags', {
  			configurable: true,
  			enumerable: false,
  			get: polyfill
  		});
  	}
  	return polyfill;
  };

  var flagsBound = callBind(implementation$3);

  defineProperties_1(flagsBound, {
  	getPolyfill: polyfill$2,
  	implementation: implementation$3,
  	shim: shim$1
  });

  var regexp_prototype_flags = flagsBound;

  var getDay = Date.prototype.getDay;
  var tryDateObject = function tryDateGetDayCall(value) {
  	try {
  		getDay.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };

  var toStr$6 = Object.prototype.toString;
  var dateClass = '[object Date]';
  var hasToStringTag$2 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isDateObject = function isDateObject(value) {
  	if (typeof value !== 'object' || value === null) {
  		return false;
  	}
  	return hasToStringTag$2 ? tryDateObject(value) : toStr$6.call(value) === dateClass;
  };

  var getTime = Date.prototype.getTime;

  function deepEqual(actual, expected, options) {
    var opts = options || {};

    // 7.1. All identical values are equivalent, as determined by ===.
    if (opts.strict ? objectIs(actual, expected) : actual === expected) {
      return true;
    }

    // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
    if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
      return opts.strict ? objectIs(actual, expected) : actual == expected;
    }

    /*
     * 7.4. For all other Object pairs, including Array objects, equivalence is
     * determined by having the same number of owned properties (as verified
     * with Object.prototype.hasOwnProperty.call), the same set of keys
     * (although not necessarily the same order), equivalent values for every
     * corresponding key, and an identical 'prototype' property. Note: this
     * accounts for both named and indexed properties on Arrays.
     */
    // eslint-disable-next-line no-use-before-define
    return objEquiv(actual, expected, opts);
  }

  function isUndefinedOrNull(value) {
    return value === null || value === undefined;
  }

  function isBuffer(x) {
    if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
      return false;
    }
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
      return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number') {
      return false;
    }
    return true;
  }

  function objEquiv(a, b, opts) {
    /* eslint max-statements: [2, 50] */
    var i, key;
    if (typeof a !== typeof b) { return false; }
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) { return false; }

    if (isArguments$1(a) !== isArguments$1(b)) { return false; }

    var aIsRegex = isRegex(a);
    var bIsRegex = isRegex(b);
    if (aIsRegex !== bIsRegex) { return false; }
    if (aIsRegex || bIsRegex) {
      return a.source === b.source && regexp_prototype_flags(a) === regexp_prototype_flags(b);
    }

    if (isDateObject(a) && isDateObject(b)) {
      return getTime.call(a) === getTime.call(b);
    }

    var aIsBuffer = isBuffer(a);
    var bIsBuffer = isBuffer(b);
    if (aIsBuffer !== bIsBuffer) { return false; }
    if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
      if (a.length !== b.length) { return false; }
      for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { return false; }
      }
      return true;
    }

    if (typeof a !== typeof b) { return false; }

    try {
      var ka = objectKeys(a);
      var kb = objectKeys(b);
    } catch (e) { // happens when one is a string literal and the other isn't
      return false;
    }
    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) { return false; }

    // the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    // ~~~cheap key test
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i]) { return false; }
    }
    // equivalent values for every corresponding key, and ~~~possibly expensive deep test
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!deepEqual(a[key], b[key], opts)) { return false; }
    }

    return true;
  }

  var deepEqual_1 = deepEqual;

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }
    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction$1(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty$3 = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop);
      var marginLeft = parseFloat(styles.marginLeft);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction$1(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$3(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$3(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty$3({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty$3({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty$3({}, side, reference[side]),
        end: defineProperty$3({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce$1(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  var key = '__global_unique_id__';

  var gud = function() {
    return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
  };

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  {
    var printWarning = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 1 ? len - 1 : 0);
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
            '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        );
      }
      if (!condition) {
        printWarning.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var implementation$4 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _gud2 = _interopRequireDefault(gud);



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var MAX_SIGNED_31_BIT_INT = 1073741823;

  // Inlined Object.is polyfill.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function objectIs(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function createEventEmitter(value) {
    var handlers = [];
    return {
      on: function on(handler) {
        handlers.push(handler);
      },
      off: function off(handler) {
        handlers = handlers.filter(function (h) {
          return h !== handler;
        });
      },
      get: function get() {
        return value;
      },
      set: function set(newValue, changedBits) {
        value = newValue;
        handlers.forEach(function (handler) {
          return handler(value, changedBits);
        });
      }
    };
  }

  function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
  }

  function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;

    var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

    var Provider = function (_Component) {
      _inherits(Provider, _Component);

      function Provider() {
        var _temp, _this, _ret;

        _classCallCheck(this, Provider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
      }

      Provider.prototype.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[contextProp] = this.emitter, _ref;
      };

      Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          var oldValue = this.props.value;
          var newValue = nextProps.value;
          var changedBits = void 0;

          if (objectIs(oldValue, newValue)) {
            changedBits = 0; // No change
          } else {
            changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
            {
              (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
            }

            changedBits |= 0;

            if (changedBits !== 0) {
              this.emitter.set(nextProps.value, changedBits);
            }
          }
        }
      };

      Provider.prototype.render = function render() {
        return this.props.children;
      };

      return Provider;
    }(React__default.Component);

    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

    var Consumer = function (_Component2) {
      _inherits(Consumer, _Component2);

      function Consumer() {
        var _temp2, _this2, _ret2;

        _classCallCheck(this, Consumer);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
          value: _this2.getValue()
        }, _this2.onUpdate = function (newValue, changedBits) {
          var observedBits = _this2.observedBits | 0;
          if ((observedBits & changedBits) !== 0) {
            _this2.setState({ value: _this2.getValue() });
          }
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
      }

      Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var observedBits = nextProps.observedBits;

        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
        : observedBits;
      };

      Consumer.prototype.componentDidMount = function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }
        var observedBits = this.props.observedBits;

        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
        : observedBits;
      };

      Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      };

      Consumer.prototype.getValue = function getValue() {
        if (this.context[contextProp]) {
          return this.context[contextProp].get();
        } else {
          return defaultValue;
        }
      };

      Consumer.prototype.render = function render() {
        return onlyChild(this.props.children)(this.state.value);
      };

      return Consumer;
    }(React__default.Component);

    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


    return {
      Provider: Provider,
      Consumer: Consumer
    };
  }

  exports.default = createReactContext;
  module.exports = exports['default'];
  });

  unwrapExports(implementation$4);

  var lib = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _react2 = _interopRequireDefault(React__default);



  var _implementation2 = _interopRequireDefault(implementation$4);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _react2.default.createContext || _implementation2.default;
  module.exports = exports['default'];
  });

  var createContext = unwrapExports(lib);

  var ManagerReferenceNodeContext = createContext();
  var ManagerReferenceNodeSetterContext = createContext();

  var Manager =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(Manager, _React$Component);

    function Manager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      defineProperty(assertThisInitialized(_this), "referenceNode", void 0);

      defineProperty(assertThisInitialized(_this), "setReferenceNode", function (newReferenceNode) {
        if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
          _this.referenceNode = newReferenceNode;

          _this.forceUpdate();
        }
      });

      return _this;
    }

    var _proto = Manager.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.referenceNode = null;
    };

    _proto.render = function render() {
      return React.createElement(ManagerReferenceNodeContext.Provider, {
        value: this.referenceNode
      }, React.createElement(ManagerReferenceNodeSetterContext.Provider, {
        value: this.setReferenceNode
      }, this.props.children));
    };

    return Manager;
  }(React.Component);

  /**
   * Takes an argument and if it's an array, returns the first item in the array,
   * otherwise returns the argument. Used for Preact compatibility.
   */
  var unwrapArray = function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
  };
  /**
   * Takes a maybe-undefined function and arbitrary args and invokes the function
   * only if it is defined.
   */

  var safeInvoke = function safeInvoke(fn) {
    if (typeof fn === "function") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return fn.apply(void 0, args);
    }
  };
  /**
   * Does a shallow equality check of two objects by comparing the reference
   * equality of each value.
   */

  var shallowEqual = function shallowEqual(objA, objB) {
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);

    if (bKeys.length !== aKeys.length) {
      return false;
    }

    for (var i = 0; i < bKeys.length; i++) {
      var key = aKeys[i];

      if (objA[key] !== objB[key]) {
        return false;
      }
    }

    return true;
  };
  /**
   * Sets a ref using either a ref callback or a ref object
   */

  var setRef = function setRef(ref, node) {
    // if its a function call it
    if (typeof ref === "function") {
      return safeInvoke(ref, node);
    } // otherwise we should treat it as a ref object
    else if (ref != null) {
        ref.current = node;
      }
  };

  var initialStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    pointerEvents: 'none'
  };
  var initialArrowStyle = {};
  var InnerPopper =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(InnerPopper, _React$Component);

    function InnerPopper() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      defineProperty(assertThisInitialized(_this), "state", {
        data: undefined,
        placement: undefined
      });

      defineProperty(assertThisInitialized(_this), "popperInstance", void 0);

      defineProperty(assertThisInitialized(_this), "popperNode", null);

      defineProperty(assertThisInitialized(_this), "arrowNode", null);

      defineProperty(assertThisInitialized(_this), "setPopperNode", function (popperNode) {
        if (!popperNode || _this.popperNode === popperNode) return;
        setRef(_this.props.innerRef, popperNode);
        _this.popperNode = popperNode;

        _this.updatePopperInstance();
      });

      defineProperty(assertThisInitialized(_this), "setArrowNode", function (arrowNode) {
        _this.arrowNode = arrowNode;
      });

      defineProperty(assertThisInitialized(_this), "updateStateModifier", {
        enabled: true,
        order: 900,
        fn: function fn(data) {
          var placement = data.placement;

          _this.setState({
            data: data,
            placement: placement
          });

          return data;
        }
      });

      defineProperty(assertThisInitialized(_this), "getOptions", function () {
        return {
          placement: _this.props.placement,
          eventsEnabled: _this.props.eventsEnabled,
          positionFixed: _this.props.positionFixed,
          modifiers: _extends_1({}, _this.props.modifiers, {
            arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
              enabled: !!_this.arrowNode,
              element: _this.arrowNode
            }),
            applyStyle: {
              enabled: false
            },
            updateStateModifier: _this.updateStateModifier
          })
        };
      });

      defineProperty(assertThisInitialized(_this), "getPopperStyle", function () {
        return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
          position: _this.state.data.offsets.popper.position
        }, _this.state.data.styles);
      });

      defineProperty(assertThisInitialized(_this), "getPopperPlacement", function () {
        return !_this.state.data ? undefined : _this.state.placement;
      });

      defineProperty(assertThisInitialized(_this), "getArrowStyle", function () {
        return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
      });

      defineProperty(assertThisInitialized(_this), "getOutOfBoundariesState", function () {
        return _this.state.data ? _this.state.data.hide : undefined;
      });

      defineProperty(assertThisInitialized(_this), "destroyPopperInstance", function () {
        if (!_this.popperInstance) return;

        _this.popperInstance.destroy();

        _this.popperInstance = null;
      });

      defineProperty(assertThisInitialized(_this), "updatePopperInstance", function () {
        _this.destroyPopperInstance();

        var _assertThisInitialize = assertThisInitialized(_this),
            popperNode = _assertThisInitialize.popperNode;

        var referenceElement = _this.props.referenceElement;
        if (!referenceElement || !popperNode) return;
        _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
      });

      defineProperty(assertThisInitialized(_this), "scheduleUpdate", function () {
        if (_this.popperInstance) {
          _this.popperInstance.scheduleUpdate();
        }
      });

      return _this;
    }

    var _proto = InnerPopper.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      // If the Popper.js options have changed, update the instance (destroy + create)
      if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deepEqual_1(this.props.modifiers, prevProps.modifiers, {
        strict: true
      })) {
        // develop only check that modifiers isn't being updated needlessly
        {
          if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && shallowEqual(this.props.modifiers, prevProps.modifiers)) {
            console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
          }
        }

        this.updatePopperInstance();
      } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
        this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
      } // A placement difference in state means popper determined a new placement
      // apart from the props value. By the time the popper element is rendered with
      // the new position Popper has already measured it, if the place change triggers
      // a size change it will result in a misaligned popper. So we schedule an update to be sure.


      if (prevState.placement !== this.state.placement) {
        this.scheduleUpdate();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      setRef(this.props.innerRef, null);
      this.destroyPopperInstance();
    };

    _proto.render = function render() {
      return unwrapArray(this.props.children)({
        ref: this.setPopperNode,
        style: this.getPopperStyle(),
        placement: this.getPopperPlacement(),
        outOfBoundaries: this.getOutOfBoundariesState(),
        scheduleUpdate: this.scheduleUpdate,
        arrowProps: {
          ref: this.setArrowNode,
          style: this.getArrowStyle()
        }
      });
    };

    return InnerPopper;
  }(React.Component);

  defineProperty(InnerPopper, "defaultProps", {
    placement: 'bottom',
    eventsEnabled: true,
    referenceElement: undefined,
    positionFixed: false
  });
  function Popper$1(_ref) {
    var referenceElement = _ref.referenceElement,
        props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

    return React.createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
      return React.createElement(InnerPopper, _extends_1({
        referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
      }, props));
    });
  }

  var InnerReference =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(InnerReference, _React$Component);

    function InnerReference() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      defineProperty(assertThisInitialized(_this), "refHandler", function (node) {
        setRef(_this.props.innerRef, node);
        safeInvoke(_this.props.setReferenceNode, node);
      });

      return _this;
    }

    var _proto = InnerReference.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      setRef(this.props.innerRef, null);
    };

    _proto.render = function render() {
      warning_1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
      return unwrapArray(this.props.children)({
        ref: this.refHandler
      });
    };

    return InnerReference;
  }(React.Component);

  function Reference(props) {
    return React.createElement(ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
      return React.createElement(InnerReference, _extends_1({
        setReferenceNode: setReferenceNode
      }, props));
    });
  }

  var chainFunction = function chain(){
    var len = arguments.length;
    var args = [];

    for (var i = 0; i < len; i++)
      args[i] = arguments[i];

    args = args.filter(function(fn){ return fn != null });

    if (args.length === 0) return undefined
    if (args.length === 1) return args[0]

    return args.reduce(function(current, next){
      return function chainedFunction() {
        current.apply(this, arguments);
        next.apply(this, arguments);
      };
    })
  };

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var warning$1 = function() {};

  {
    warning$1 = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1$1 = warning$1;

  var ChildMapping = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;



  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children) {
    if (!children) {
      return children;
    }
    var result = {};
    React__default.Children.map(children, function (child) {
      return child;
    }).forEach(function (child) {
      result[child.key] = child;
    });
    return result;
  }

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      }

      return prev[key];
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i = void 0;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
  });

  unwrapExports(ChildMapping);
  var ChildMapping_1 = ChildMapping.getChildMapping;
  var ChildMapping_2 = ChildMapping.mergeChildMappings;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _chainFunction2 = _interopRequireDefault(chainFunction);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _warning2 = _interopRequireDefault(warning_1$1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var propTypes = {
    component: _propTypes2.default.any,
    childFactory: _propTypes2.default.func,
    children: _propTypes2.default.node
  };

  var defaultProps = {
    component: 'span',
    childFactory: function childFactory(child) {
      return child;
    }
  };

  var TransitionGroup = function (_React$Component) {
    _inherits(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      _classCallCheck(this, TransitionGroup);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.performAppear = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillAppear) {
          component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
        } else {
          _this._handleDoneAppearing(key, component);
        }
      };

      _this._handleDoneAppearing = function (key, component) {
        if (component.componentDidAppear) {
          component.componentDidAppear();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
          // This was removed before it had fully appeared. Remove it.
          _this.performLeave(key, component);
        }
      };

      _this.performEnter = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillEnter) {
          component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
        } else {
          _this._handleDoneEntering(key, component);
        }
      };

      _this._handleDoneEntering = function (key, component) {
        if (component.componentDidEnter) {
          component.componentDidEnter();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
          // This was removed before it had fully entered. Remove it.
          _this.performLeave(key, component);
        }
      };

      _this.performLeave = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillLeave) {
          component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
        } else {
          // Note that this is somewhat dangerous b/c it calls setState()
          // again, effectively mutating the component before all the work
          // is done.
          _this._handleDoneLeaving(key, component);
        }
      };

      _this._handleDoneLeaving = function (key, component) {
        if (component.componentDidLeave) {
          component.componentDidLeave();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
          // This entered again before it fully left. Add it again.
          _this.keysToEnter.push(key);
        } else {
          _this.setState(function (state) {
            var newChildren = _extends({}, state.children);
            delete newChildren[key];
            return { children: newChildren };
          });
        }
      };

      _this.childRefs = Object.create(null);

      _this.state = {
        children: (0, ChildMapping.getChildMapping)(props.children)
      };
      return _this;
    }

    TransitionGroup.prototype.componentWillMount = function componentWillMount() {
      this.currentlyTransitioningKeys = {};
      this.keysToEnter = [];
      this.keysToLeave = [];
    };

    TransitionGroup.prototype.componentDidMount = function componentDidMount() {
      var initialChildMapping = this.state.children;
      for (var key in initialChildMapping) {
        if (initialChildMapping[key]) {
          this.performAppear(key, this.childRefs[key]);
        }
      }
    };

    TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);
      var prevChildMapping = this.state.children;

      this.setState({
        children: (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
      });

      for (var key in nextChildMapping) {
        var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }

      for (var _key in prevChildMapping) {
        var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
        if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
          this.keysToLeave.push(_key);
        }
      }

      // If we want to someday check for reordering, we could do it here.
    };

    TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
      var _this2 = this;

      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(function (key) {
        return _this2.performEnter(key, _this2.childRefs[key]);
      });

      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(function (key) {
        return _this2.performLeave(key, _this2.childRefs[key]);
      });
    };

    TransitionGroup.prototype.render = function render() {
      var _this3 = this;

      // TODO: we could get rid of the need for the wrapper node
      // by cloning a single child
      var childrenToRender = [];

      var _loop = function _loop(key) {
        var child = _this3.state.children[key];
        if (child) {
          var isCallbackRef = typeof child.ref !== 'string';
          var factoryChild = _this3.props.childFactory(child);
          var ref = function ref(r) {
            _this3.childRefs[key] = r;
          };

           (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') ;

          // Always chaining the refs leads to problems when the childFactory
          // wraps the child. The child ref callback gets called twice with the
          // wrapper and the child. So we only need to chain the ref if the
          // factoryChild is not different from child.
          if (factoryChild === child && isCallbackRef) {
            ref = (0, _chainFunction2.default)(child.ref, ref);
          }

          // You may need to apply reactive updates to a child as it is leaving.
          // The normal React way to do it won't work since the child will have
          // already been removed. In case you need this behavior you can provide
          // a childFactory function to wrap every child, even the ones that are
          // leaving.
          childrenToRender.push(_react2.default.cloneElement(factoryChild, {
            key: key,
            ref: ref
          }));
        }
      };

      for (var key in this.state.children) {
        _loop(key);
      }

      // Do not forward TransitionGroup props to primitive DOM nodes
      var props = _extends({}, this.props);
      delete props.transitionLeave;
      delete props.transitionName;
      delete props.transitionAppear;
      delete props.transitionEnter;
      delete props.childFactory;
      delete props.transitionLeaveTimeout;
      delete props.transitionEnterTimeout;
      delete props.transitionAppearTimeout;
      delete props.component;

      return _react2.default.createElement(this.props.component, props, childrenToRender);
    };

    return TransitionGroup;
  }(_react2.default.Component);

  TransitionGroup.displayName = 'TransitionGroup';


  TransitionGroup.propTypes =  propTypes ;
  TransitionGroup.defaultProps = defaultProps;

  exports.default = TransitionGroup;
  module.exports = exports['default'];
  });

  unwrapExports(TransitionGroup_1);

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault);

  var hasClass_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = hasClass;

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  module.exports = exports["default"];
  });

  unwrapExports(hasClass_1);

  var addClass_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = addClass;

  var _hasClass = interopRequireDefault(hasClass_1);

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }

  module.exports = exports["default"];
  });

  unwrapExports(addClass_1);

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  var removeClass = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };

  var inDOM = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(inDOM);

  var requestAnimationFrame$1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
  var cancel = 'clearTimeout';
  var raf = fallback;
  var compatRaf;

  var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
  };

  if (_inDOM.default) {
    vendors.some(function (vendor) {
      var rafKey = getKey(vendor, 'request');

      if (rafKey in window) {
        cancel = getKey(vendor, 'cancel');
        return raf = function raf(cb) {
          return window[rafKey](cb);
        };
      }
    });
  }
  /* https://github.com/component/raf */


  var prev = new Date().getTime();

  function fallback(fn) {
    var curr = new Date().getTime(),
        ms = Math.max(0, 16 - (curr - prev)),
        req = setTimeout(fn, ms);
    prev = curr;
    return req;
  }

  compatRaf = function compatRaf(cb) {
    return raf(cb);
  };

  compatRaf.cancel = function (id) {
    window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
  };

  var _default = compatRaf;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(requestAnimationFrame$1);

  var properties = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var transform = 'transform';
  exports.transform = transform;
  var prefix, transitionEnd, animationEnd;
  exports.animationEnd = animationEnd;
  exports.transitionEnd = transitionEnd;
  var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
  exports.transitionDelay = transitionDelay;
  exports.transitionTiming = transitionTiming;
  exports.transitionDuration = transitionDuration;
  exports.transitionProperty = transitionProperty;
  var animationName, animationDuration, animationTiming, animationDelay;
  exports.animationDelay = animationDelay;
  exports.animationTiming = animationTiming;
  exports.animationDuration = animationDuration;
  exports.animationName = animationName;

  if (_inDOM.default) {
    var _getTransitionPropert = getTransitionProperties();

    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
    exports.transform = transform = prefix + "-" + transform;
    exports.transitionProperty = transitionProperty = prefix + "-transition-property";
    exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
    exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
    exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
    exports.animationName = animationName = prefix + "-animation-name";
    exports.animationDuration = animationDuration = prefix + "-animation-duration";
    exports.animationTiming = animationTiming = prefix + "-animation-delay";
    exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
  }

  var _default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
  };
  exports.default = _default;

  function getTransitionProperties() {
    var style = document.createElement('div').style;
    var vendorMap = {
      O: function O(e) {
        return "o" + e.toLowerCase();
      },
      Moz: function Moz(e) {
        return e.toLowerCase();
      },
      Webkit: function Webkit(e) {
        return "webkit" + e;
      },
      ms: function ms(e) {
        return "MS" + e;
      }
    };
    var vendors = Object.keys(vendorMap);
    var transitionEnd, animationEnd;
    var prefix = '';

    for (var i = 0; i < vendors.length; i++) {
      var vendor = vendors[i];

      if (vendor + "TransitionProperty" in style) {
        prefix = "-" + vendor.toLowerCase();
        transitionEnd = vendorMap[vendor]('TransitionEnd');
        animationEnd = vendorMap[vendor]('AnimationEnd');
        break;
      }
    }

    if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
    if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
    style = null;
    return {
      animationEnd: animationEnd,
      transitionEnd: transitionEnd,
      prefix: prefix
    };
  }
  });

  unwrapExports(properties);
  var properties_1 = properties.animationEnd;
  var properties_2 = properties.animationDelay;
  var properties_3 = properties.animationTiming;
  var properties_4 = properties.animationDuration;
  var properties_5 = properties.animationName;
  var properties_6 = properties.transitionEnd;
  var properties_7 = properties.transitionDuration;
  var properties_8 = properties.transitionDelay;
  var properties_9 = properties.transitionTiming;
  var properties_10 = properties.transitionProperty;
  var properties_11 = properties.transform;

  var PropTypes = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.nameShape = undefined;
  exports.transitionTimeout = transitionTimeout;



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    leave: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    leave: _propTypes2.default.string,
    leaveActive: _propTypes2.default.string,
    appear: _propTypes2.default.string,
    appearActive: _propTypes2.default.string
  })]);
  });

  unwrapExports(PropTypes);
  var PropTypes_1 = PropTypes.nameShape;
  var PropTypes_2 = PropTypes.transitionTimeout;

  var CSSTransitionGroupChild_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _addClass2 = _interopRequireDefault(addClass_1);



  var _removeClass2 = _interopRequireDefault(removeClass);



  var _requestAnimationFrame2 = _interopRequireDefault(requestAnimationFrame$1);





  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var events = [];
  if (properties.transitionEnd) events.push(properties.transitionEnd);
  if (properties.animationEnd) events.push(properties.animationEnd);

  function addEndListener(node, listener) {
    if (events.length) {
      events.forEach(function (e) {
        return node.addEventListener(e, listener, false);
      });
    } else {
      setTimeout(listener, 0);
    }

    return function () {
      if (!events.length) return;
      events.forEach(function (e) {
        return node.removeEventListener(e, listener, false);
      });
    };
  }

  var propTypes = {
    children: _propTypes2.default.node,
    name: PropTypes.nameShape.isRequired,

    // Once we require timeouts to be specified, we can remove the
    // boolean flags (appear etc.) and just accept a number
    // or a bool for the timeout flags (appearTimeout etc.)
    appear: _propTypes2.default.bool,
    enter: _propTypes2.default.bool,
    leave: _propTypes2.default.bool,
    appearTimeout: _propTypes2.default.number,
    enterTimeout: _propTypes2.default.number,
    leaveTimeout: _propTypes2.default.number
  };

  var CSSTransitionGroupChild = function (_React$Component) {
    _inherits(CSSTransitionGroupChild, _React$Component);

    function CSSTransitionGroupChild() {
      var _temp, _this, _ret;

      _classCallCheck(this, CSSTransitionGroupChild);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
        if (_this.props.appear) {
          _this.transition('appear', done, _this.props.appearTimeout);
        } else {
          done();
        }
      }, _this.componentWillEnter = function (done) {
        if (_this.props.enter) {
          _this.transition('enter', done, _this.props.enterTimeout);
        } else {
          done();
        }
      }, _this.componentWillLeave = function (done) {
        if (_this.props.leave) {
          _this.transition('leave', done, _this.props.leaveTimeout);
        } else {
          done();
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
      this.classNameAndNodeQueue = [];
      this.transitionTimeouts = [];
    };

    CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.transitionTimeouts.forEach(function (timeout) {
        clearTimeout(timeout);
      });

      this.classNameAndNodeQueue.length = 0;
    };

    CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
      var node = (0, ReactDOM__default.findDOMNode)(this);

      if (!node) {
        if (finishCallback) {
          finishCallback();
        }
        return;
      }

      var className = this.props.name[animationType] || this.props.name + '-' + animationType;
      var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
      var timer = null;
      var removeListeners = void 0;

      (0, _addClass2.default)(node, className);

      // Need to do this to actually trigger a transition.
      this.queueClassAndNode(activeClassName, node);

      // Clean-up the animation after the specified delay
      var finish = function finish(e) {
        if (e && e.target !== node) {
          return;
        }

        clearTimeout(timer);
        if (removeListeners) removeListeners();

        (0, _removeClass2.default)(node, className);
        (0, _removeClass2.default)(node, activeClassName);

        if (removeListeners) removeListeners();

        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (finishCallback) {
          finishCallback();
        }
      };

      if (timeout) {
        timer = setTimeout(finish, timeout);
        this.transitionTimeouts.push(timer);
      } else if (properties.transitionEnd) {
        removeListeners = addEndListener(node, finish);
      }
    };

    CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
      var _this2 = this;

      this.classNameAndNodeQueue.push({
        className: className,
        node: node
      });

      if (!this.rafHandle) {
        this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
          return _this2.flushClassNameAndNodeQueue();
        });
      }
    };

    CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
      if (!this.unmounted) {
        this.classNameAndNodeQueue.forEach(function (obj) {
          // This is for to force a repaint,
          // which is necessary in order to transition styles when adding a class name.
          /* eslint-disable no-unused-expressions */
          obj.node.scrollTop;
          /* eslint-enable no-unused-expressions */
          (0, _addClass2.default)(obj.node, obj.className);
        });
      }
      this.classNameAndNodeQueue.length = 0;
      this.rafHandle = null;
    };

    CSSTransitionGroupChild.prototype.render = function render() {
      var props = _extends({}, this.props);
      delete props.name;
      delete props.appear;
      delete props.enter;
      delete props.leave;
      delete props.appearTimeout;
      delete props.enterTimeout;
      delete props.leaveTimeout;
      delete props.children;
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
    };

    return CSSTransitionGroupChild;
  }(_react2.default.Component);

  CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


  CSSTransitionGroupChild.propTypes =  propTypes ;

  exports.default = CSSTransitionGroupChild;
  module.exports = exports['default'];
  });

  unwrapExports(CSSTransitionGroupChild_1);

  var CSSTransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(PropTypes$1);



  var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);



  var _CSSTransitionGroupChild2 = _interopRequireDefault(CSSTransitionGroupChild_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var propTypes = {
    transitionName: PropTypes.nameShape.isRequired,

    transitionAppear: _propTypes2.default.bool,
    transitionEnter: _propTypes2.default.bool,
    transitionLeave: _propTypes2.default.bool,
    transitionAppearTimeout: (0, PropTypes.transitionTimeout)('Appear'),
    transitionEnterTimeout: (0, PropTypes.transitionTimeout)('Enter'),
    transitionLeaveTimeout: (0, PropTypes.transitionTimeout)('Leave')
  };

  var defaultProps = {
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true
  };

  var CSSTransitionGroup = function (_React$Component) {
    _inherits(CSSTransitionGroup, _React$Component);

    function CSSTransitionGroup() {
      var _temp, _this, _ret;

      _classCallCheck(this, CSSTransitionGroup);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
        return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
          name: _this.props.transitionName,
          appear: _this.props.transitionAppear,
          enter: _this.props.transitionEnter,
          leave: _this.props.transitionLeave,
          appearTimeout: _this.props.transitionAppearTimeout,
          enterTimeout: _this.props.transitionEnterTimeout,
          leaveTimeout: _this.props.transitionLeaveTimeout
        }, child);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // We need to provide this childFactory so that
    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
    // leave while it is leaving.


    CSSTransitionGroup.prototype.render = function render() {
      return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
    };

    return CSSTransitionGroup;
  }(_react2.default.Component);

  CSSTransitionGroup.displayName = 'CSSTransitionGroup';


  CSSTransitionGroup.propTypes =  propTypes ;
  CSSTransitionGroup.defaultProps = defaultProps;

  exports.default = CSSTransitionGroup;
  module.exports = exports['default'];
  });

  unwrapExports(CSSTransitionGroup_1);

  var reactTransitionGroup = createCommonjsModule(function (module) {



  var _CSSTransitionGroup2 = _interopRequireDefault(CSSTransitionGroup_1);



  var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = {
    TransitionGroup: _TransitionGroup2.default,
    CSSTransitionGroup: _CSSTransitionGroup2.default
  };
  });

  unwrapExports(reactTransitionGroup);
  var reactTransitionGroup_1 = reactTransitionGroup.TransitionGroup;
  var reactTransitionGroup_2 = reactTransitionGroup.CSSTransitionGroup;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$2(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$2;

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  function isNil(value) {
    return value == null;
  }

  var isNil_1 = isNil;

  var NestedDropdownMenuHeader = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(NestedDropdownMenuHeader, _PureComponent);

    function NestedDropdownMenuHeader() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = NestedDropdownMenuHeader.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          onBackClick = _this$props.onBackClick,
          showBackBtn = _this$props.showBackBtn,
          panelTitle = _this$props.panelTitle,
          currentPath = _this$props.currentPath,
          onAddNewClick = _this$props.onAddNewClick;
      var headerStyles = classNames('molecules-nested-dropdown-menu__header', {
        'molecules-nested-dropdown-menu__header--with-title': !isNil_1(panelTitle)
      });
      var showAddNew = !isNil_1(currentPath.children) && currentPath.children.length > 0 && currentPath.allowAddNew;
      return /*#__PURE__*/React__default.createElement("div", {
        className: headerStyles
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-nested-dropdown-menu__header-item header-item--left"
      }, showBackBtn && /*#__PURE__*/React__default.createElement(Button, {
        type: "primary",
        onClick: onBackClick,
        "data-test": "ndm-back-btn"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-chevron-left"
      }), " Back")), /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-nested-dropdown-menu__header-item header-item--center",
        "data-test": "ndm-title"
      }, panelTitle), /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-nested-dropdown-menu__header-item header-item--right"
      }, showAddNew && /*#__PURE__*/React__default.createElement(Button, {
        type: "primary",
        onClick: onAddNewClick,
        "data-test": "ndm-add-new-btn"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-plus"
      }), " Add")));
    };

    return NestedDropdownMenuHeader;
  }(React.PureComponent);

  _defineProperty(NestedDropdownMenuHeader, "propTypes", {
    showBackBtn: PropTypes$1.bool.isRequired,
    panelTitle: PropTypes$1.string,
    onBackClick: PropTypes$1.func.isRequired,
    currentPath: PropTypes$1.shape({}),
    onAddNewClick: PropTypes$1.func.isRequired
  });

  _defineProperty(NestedDropdownMenuHeader, "defaultProps", {
    panelTitle: null,
    currentPath: {}
  });

  var NestedDropdownMenuFilter = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(NestedDropdownMenuFilter, _PureComponent);

    function NestedDropdownMenuFilter() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = NestedDropdownMenuFilter.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          filterValue = _this$props.filterValue,
          handleFilterChange = _this$props.handleFilterChange,
          placeholder = _this$props.placeholder;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-nested-dropdown-menu__filter-wrapper"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-search"
      }), /*#__PURE__*/React__default.createElement("input", {
        value: filterValue,
        onChange: handleFilterChange,
        placeholder: placeholder
      }));
    };

    return NestedDropdownMenuFilter;
  }(React.PureComponent);

  _defineProperty(NestedDropdownMenuFilter, "propTypes", {
    filterValue: PropTypes$1.string.isRequired,
    handleFilterChange: PropTypes$1.func.isRequired,
    placeholder: PropTypes$1.string.isRequired
  });

  _defineProperty(NestedDropdownMenuFilter, "defaultProps", {});

  var NestedDropdownMenuList = /*#__PURE__*/function (_Component) {
    _inheritsLoose(NestedDropdownMenuList, _Component);

    function NestedDropdownMenuList() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "filterValues", function (item) {
        var filterValue = _this.props.filterValue.trim().toLowerCase();

        var currentValue = item.label.trim().toLowerCase();
        return currentValue.includes(filterValue);
      });

      return _this;
    }

    var _proto = NestedDropdownMenuList.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          items = _this$props.items,
          handleItemClick = _this$props.handleItemClick,
          currentPath = _this$props.currentPath,
          onAddNewClick = _this$props.onAddNewClick;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-nested-dropdown-menu__content"
      }, /*#__PURE__*/React__default.createElement("ul", {
        className: "molecules-nested-dropdown-menu__content-list"
      }, items.filter(this.filterValues).map(function (item) {
        return /*#__PURE__*/React__default.createElement("li", {
          key: item.value
        }, /*#__PURE__*/React__default.createElement("a", {
          id: item.value,
          role: "button",
          tabIndex: 0,
          className: "molecules-nested-dropdown-menu__content-list__item",
          onClick: function onClick() {
            return handleItemClick(item);
          }
        }, item.label, item.children && item.children.length > 0 && /*#__PURE__*/React__default.createElement("i", {
          className: "fa fa-chevron-right"
        })));
      }), items.length === 0 && currentPath.allowAddNew && /*#__PURE__*/React__default.createElement("li", {
        className: "molecules-nested-dropdown-menu__content-list__add-new"
      }, /*#__PURE__*/React__default.createElement("a", {
        role: "button",
        tabIndex: 0,
        onClick: onAddNewClick,
        "data-test": "ndm-add-new-row"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-plus"
      }), "Create new " + currentPath.label.toLowerCase()))));
    };

    return NestedDropdownMenuList;
  }(React.Component);

  _defineProperty(NestedDropdownMenuList, "propTypes", {
    items: PropTypes$1.arrayOf(PropTypes$1.shape({})).isRequired,
    handleItemClick: PropTypes$1.func.isRequired,
    filterValue: PropTypes$1.string.isRequired,
    currentPath: PropTypes$1.shape({}),
    onAddNewClick: PropTypes$1.func.isRequired
  });

  _defineProperty(NestedDropdownMenuList, "defaultProps", {
    currentPath: {}
  });

  var NestedDropdownMenu = /*#__PURE__*/function (_Component) {
    _inheritsLoose(NestedDropdownMenu, _Component);

    function NestedDropdownMenu() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        selectedPath: [],
        showBackBtn: false,
        panelTitle: null,
        filterValue: ''
      });

      _defineProperty(_assertThisInitialized(_this), "onBackClick", function () {
        var selectedPath = _this.state.selectedPath;

        if (selectedPath.length > 0) {
          var newSelectedPath = selectedPath.slice(0, -1);
          var pathItems = newSelectedPath[newSelectedPath.length];
          var currentPath = selectedPath[selectedPath.length - 2];
          var panelTitle = null;

          if (pathItems && pathItems.label) {
            panelTitle = pathItems.label;
          } else if (!isNil_1(currentPath) && currentPath.label) {
            panelTitle = currentPath.label;
          }

          _this.setState({
            panelTitle: panelTitle,
            selectedPath: newSelectedPath,
            showBackBtn: newSelectedPath.length > 0
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (item) {
        var onItemClick = _this.props.onItemClick;
        var selectedPath = _this.state.selectedPath; // If we have children and a populated, nested list

        if (item.children || !item.children && item.allowAddNew) {
          // Add the new item(s) to the array
          var updatedPath = selectedPath;
          updatedPath.push(item);

          _this.setState({
            selectedPath: updatedPath,
            showBackBtn: updatedPath.length > 0,
            panelTitle: item.label || null
          });
        } // If the item has a function set as the onClick key, it takes priority
        else if (item.onItemClick && typeof item.onItemClick === 'function') {
            item.onItemClick(item);
          } // If we don't have children
          else {
              onItemClick(item);
            }
      });

      _defineProperty(_assertThisInitialized(_this), "handleFilterChange", function (e) {
        e.preventDefault();

        _this.setState({
          filterValue: e.target.value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleAddNewClick", function (e) {
        e.preventDefault();
        var onAddNewClick = _this.props.onAddNewClick;
        var selectedPath = _this.state.selectedPath;
        var currentPath = selectedPath[selectedPath.length - 1];

        if (!isFunction_1(onAddNewClick) && !isFunction_1(currentPath.onAddNewClick)) {
          throw new Error('Either the onAddNewClick prop or a child key must be a function!');
        } else if (!isNil_1(currentPath.onAddNewClick)) {
          if (!isFunction_1(currentPath.onAddNewClick)) {
            throw new Error('The onAddNewClick key must be a function!');
          } else {
            currentPath.onAddNewClick(currentPath, selectedPath);
          }
        } else {
          onAddNewClick(currentPath, selectedPath);
        }
      });

      return _this;
    }

    var _proto = NestedDropdownMenu.prototype;

    /**
     * "react-onclickoutside" requires this function in order to properly
     * close the component on outside click
     */
    _proto.handleClickOutside = function handleClickOutside() {
      var _this$props = this.props,
          closeOnOutsideClick = _this$props.closeOnOutsideClick,
          onClose = _this$props.onClose,
          isOpen = _this$props.isOpen;

      if (closeOnOutsideClick && isOpen) {
        onClose();
      }
    }
    /**
     * Handles the logic when either the "+ Add" button in the topbar or
     * the "+ Create new <thing>" row are clicked.
     *
     * We look for a "addNewClick" key and if none are found, we use the main
     * "onAddNewClick" prop.
     *
     * @param {object} e - JS onclick event
     */
    ;

    /**
     * Sets up and renders a panel for a group of items in our array of items
     *
     * @param {array} items - The items to be displayed in the path's panel
     * @param {array} path - An array of "directions" as to where we are in the nested items
     */
    _proto.renderPanel = function renderPanel(items, path) {
      if (items === void 0) {
        items = this.props.items;
      }

      if (path === void 0) {
        path = [];
      }

      var _this$state = this.state,
          selectedPath = _this$state.selectedPath,
          filterValue = _this$state.filterValue;
      var depth = path.length;
      var isActive = selectedPath.length === depth;
      var panelClass = "panel-" + depth;
      var classes = classNames({
        panel: depth > 0
      }, panelClass, {
        active: isActive
      });
      return /*#__PURE__*/React__default.createElement("div", {
        key: depth,
        className: classes,
        "data-test": "ndm-panel"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "molecules-nested-dropdown-menu__wrapper"
      }, /*#__PURE__*/React__default.createElement(NestedDropdownMenuList, {
        path: path,
        currentPath: selectedPath[selectedPath.length - 1],
        items: items,
        filterValue: filterValue,
        handleItemClick: this.handleItemClick,
        onAddNewClick: this.handleAddNewClick
      })));
    };

    _proto.render = function render() {
      var _this2 = this;

      var isOpen = this.props.isOpen;
      var _this$state2 = this.state,
          selectedPath = _this$state2.selectedPath,
          showBackBtn = _this$state2.showBackBtn,
          panelTitle = _this$state2.panelTitle;
      var selectedPanel = "active-" + selectedPath.length;
      var classes = classNames(selectedPanel, 'panels'); // Render the nested panels for animation

      var nestedPanels = selectedPath.map(function (item, index) {
        var path = selectedPath.slice(0, index + 1);
        var items = item.children || [];
        return _this2.renderPanel(items, path);
      });
      return /*#__PURE__*/React__default.createElement(Manager, {
        "data-test": "ndm"
      }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Reference, {
        "data-test": "ndm-trigger"
      }, function (_ref) {
        var ref = _ref.ref;
        return /*#__PURE__*/React__default.cloneElement(_this2.props.children, {
          ref: ref
        });
      }), isOpen && /*#__PURE__*/React__default.createElement(Popper$1, {
        placement: this.props.placement
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement,
            arrowProps = _ref2.arrowProps;
        return /*#__PURE__*/React__default.createElement("div", {
          ref: ref,
          style: style,
          "data-placement": placement,
          "data-test": "ndm-placement",
          className: "molecules-nested-dropdown-menu"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "molecules-nested-dropdown-menu__container"
        }, /*#__PURE__*/React__default.createElement(NestedDropdownMenuHeader, {
          "data-test": "ndm-header",
          path: selectedPath,
          currentPath: selectedPath[selectedPath.length - 1],
          showBackBtn: showBackBtn,
          onBackClick: _this2.onBackClick,
          panelTitle: panelTitle,
          onAddNewClick: _this2.handleAddNewClick
        }), panelTitle && /*#__PURE__*/React__default.createElement(NestedDropdownMenuFilter, {
          filterValue: _this2.state.filterValue,
          handleFilterChange: _this2.handleFilterChange,
          placeholder: "Seach " + panelTitle.toLowerCase(),
          "data-test": "ndm-filter"
        }), /*#__PURE__*/React__default.createElement("div", {
          className: classes
        }, _this2.renderPanel(), /*#__PURE__*/React__default.createElement(reactTransitionGroup_2, {
          transitionName: "molecules-nested-dropdown-menu-transitioning",
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300
        }, nestedPanels))), /*#__PURE__*/React__default.createElement("div", {
          ref: arrowProps.ref,
          style: arrowProps.style
        }));
      })));
    };

    return NestedDropdownMenu;
  }(React.Component);

  _defineProperty(NestedDropdownMenu, "propTypes", {
    onClose: PropTypes$1.func.isRequired,
    isOpen: PropTypes$1.bool.isRequired,
    closeOnOutsideClick: PropTypes$1.bool,
    children: PropTypes$1.element.isRequired,
    items: PropTypes$1.arrayOf(PropTypes$1.shape({
      label: PropTypes$1.string,
      value: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
      allowAddNew: PropTypes$1.bool,
      onAddNewClick: PropTypes$1.func,
      onClick: PropTypes$1.func,
      children: PropTypes$1.arrayOf(PropTypes$1.shape({
        label: PropTypes$1.string,
        value: PropTypes$1.string,
        onItemClick: PropTypes$1.func
      }))
    })).isRequired,
    onItemClick: PropTypes$1.func.isRequired,
    onAddNewClick: PropTypes$1.func,
    placement: PropTypes$1.string
  });

  _defineProperty(NestedDropdownMenu, "defaultProps", {
    onAddNewClick: undefined,
    isOpen: false,
    closeOnOutsideClick: true,
    allowAddNew: false,
    placement: 'bottom'
  });

  var NestedDropdownMenu$1 = onClickOutsideHOC(NestedDropdownMenu);

  exports.Button = Button;
  exports.ButtonGroup = ButtonGroup;
  exports.Checkbox = Checkbox;
  exports.CollapsableBox = CandidateSearchFilter;
  exports.Drawer = Drawer;
  exports.Dropdown = Dropdown$1;
  exports.Link = Link;
  exports.Loader = Loader;
  exports.Modal = Modal;
  exports.ModalBody = ModalBody;
  exports.ModalFooter = ModalFooter;
  exports.ModalHeader = ModalHeader;
  exports.NestedDropdownMenu = NestedDropdownMenu$1;
  exports.RadioButton = RadioButton;
  exports.Tabs = Tabs;
  exports.Tooltip = Tooltip;
  exports.TypeAheadSearch = TypeAheadSearch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=molecules.js.map
