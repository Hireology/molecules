import React, { PureComponent, createElement, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM, { findDOMNode } from 'react-dom';

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
});

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

_defineProperty(ButtonGroup, "propTypes", {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justified']),
  size: PropTypes.oneOf(['medium', 'small', 'full']),
  extraClassNames: PropTypes.string
});

_defineProperty(ButtonGroup, "defaultProps", {
  align: null,
  size: null,
  extraClassNames: ''
});

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

_defineProperty(Loader, "propTypes", {
  message: PropTypes.string,
  inline: PropTypes.bool
});

_defineProperty(Loader, "defaultProps", {
  inline: false,
  message: 'Loading...'
});

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

_defineProperty(Checkbox, "propTypes", {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func
});

_defineProperty(Checkbox, "defaultProps", {
  checked: false,
  disabled: false,
  onChange: null
});

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

_defineProperty(RadioButton, "propTypes", {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
});

_defineProperty(RadioButton, "defaultProps", {
  checked: false,
  disabled: false,
  error: false,
  id: '',
  inline: false,
  name: 'radioButtonGroup'
});

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

_defineProperty(Link, "propTypes", {
  additionalClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['warning', 'danger', 'secondary'])
});

_defineProperty(Link, "defaultProps", {
  onClick: null,
  disabled: false,
  type: null,
  additionalClasses: null,
  id: null
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

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
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

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
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

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
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
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

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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
  return value == null ? '' : baseToString(value);
}

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
  string = toString(string);
  position = baseClamp(toInteger(position), 0, string.length);
  target = baseToString(target);
  return string.slice(position, position + target.length) == target;
}

var lodash_startswith = startsWith;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

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
  return root$1.Date.now();
};

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
  wait = toNumber$1(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber$1(options.maxWait) || 0, wait) : maxWait;
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
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
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
    var time = now();
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
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
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
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

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
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

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
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
}

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
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_debounce = debounce;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

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
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to search.
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

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to search.
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
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
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
    ? basePullAll(array, values)
    : array;
}

var lodash_pullall = pullAll;

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

      if (lodash_startswith(suggestionSection.toLowerCase(), filter.toLowerCase())) {
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
        return lodash_startswith(dataItem.value, filter);
      } // Second iteration return suggestions that match casing
      // of filter from start of any word in the string


      if (sortIteration === 1) {
        var caseSensitiveSection = null;
        var matches = false;

        for (var wordIteration = 1; caseSensitiveSection !== '' && !matches; wordIteration += 1) {
          caseSensitiveSection = dataItem.value.split(' ').slice(wordIteration).join(' ');
          matches = lodash_startswith(caseSensitiveSection, filter);
        }

        return matches;
      } // Third iteration return suggestions with different casing
      // that match filter starting from the beginning of the string


      if (sortIteration === 2) {
        return lodash_startswith(dataItem.value.toLowerCase(), filter.toLowerCase());
      } // Final iteration return the rest of the unsorted data


      return true;
    }); // Remove selected suggestions from the unsorted array to stop
    // them from being re-selected in the next iteration. Add the
    // selected suggestions to the sorted array.

    lodash_pullall(unsortedData, section);
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

    PropTypes.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
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

    PropTypes.checkPropTypes((_PropTypes$checkPropT2 = {}, _PropTypes$checkPropT2[propName] = PropTypes.func.isRequired, _PropTypes$checkPropT2), props, propName, componentName);
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

    PropTypes.checkPropTypes((_PropTypes$checkPropT3 = {}, _PropTypes$checkPropT3[propName] = PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired, _PropTypes$checkPropT3), props, propName, componentName);
  }
};

var TypeAheadSearch =
/*#__PURE__*/
function (_React$Component) {
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

        if (lodash_startswith(suggestionSection.toLowerCase(), _this.state.filter.trim().toLowerCase())) {
          var preBoldText = suggestion.split(' ').slice(0, wordIteration).join(' ');
          var boldText = suggestion.split(' ').slice(wordIteration).join(' ').slice(0, _this.state.filter.length);
          var postBoldText = suggestion.split(' ').slice(wordIteration).join(' ').slice(_this.state.filter.length);
          return React.createElement("span", {
            "data-test": "suggestion-text"
          }, preBoldText !== '' && preBoldText + " ", React.createElement("b", null, boldText), postBoldText !== '' && postBoldText);
        }
      }

      return React.createElement("span", {
        "data-test": "suggestion-text"
      }, suggestion);
    });

    _defineProperty(_assertThisInitialized(_this), "delayedOnChange", lodash_debounce(_this.onChangeHandler, 500));

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
    return React.createElement("div", {
      className: "molecules-type-ahead-search"
    }, React.createElement("i", {
      role: "button",
      tabIndex: 0,
      onClick: function onClick() {
        return _this2.onSubmit(_this2.state.filter);
      },
      className: "fa fa-search fa-fw molecules-type-ahead-search__magnifying-glass",
      "data-test": "magnifying-glass",
      "aria-label": "search"
    }), React.createElement("input", {
      type: "text",
      className: "molecules-type-ahead-search__search",
      "data-test": "search-input",
      placeholder: this.props.placeholder,
      value: this.state.filter,
      onChange: this.onInputChange,
      onKeyDown: this.handleKeyDown,
      "aria-label": "filter",
      "aria-describedby": this.props.placeholder
    }), suggestions.length > 0 && this.state.filter.length > 1 && React.createElement("div", {
      className: "molecules-type-ahead-search__type-ahead",
      "data-test": "type-ahead-dropdown"
    }, suggestions.map(function (suggestion, index) {
      return React.createElement("p", {
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
}(React.Component);

_defineProperty(TypeAheadSearch, "propTypes", {
  onSubmit: PropTypes.func.isRequired,
  initialFilter: PropTypes.string,
  placeholder: PropTypes.string,
  useCustomFilter: PropTypes.bool,
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

var Tabs =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Tabs, _PureComponent);

  function Tabs() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this = this;

    return React.createElement(ButtonGroup, null, this.props.tabs.map(function (tab, index) {
      var className = classNames('molecules-tab', {
        'molecules-tab--primary': _this.props.type === 'primary',
        'molecules-tab--secondary': _this.props.type === 'secondary',
        'molecules-tab--active': _this.props.activeIndex === index
      });
      return React.createElement("button", {
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
}(PureComponent);

_defineProperty(Tabs, "propTypes", {
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary'])
});

_defineProperty(Tabs, "defaultProps", {
  type: 'primary'
});

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
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
    return React.createElement("div", {
      className: tooltipWrapperStyles
    }, React.createElement("span", {
      className: tooltipHoverStyle,
      tabIndex: this.props.hover ? 0 : -1
    }, this.props.children || React.createElement("i", {
      className: "fa fa-fw fa-question-circle molecules-tooltip-wrapper__icon",
      "data-test": "tooltip-icon"
    })), !this.props.hide && React.createElement("div", {
      className: tooltipClasses,
      style: tooltipStyle,
      "data-test": "tooltip"
    }, this.props.tooltipContent));
  };

  return Tooltip;
}(PureComponent);

_defineProperty(Tooltip, "propTypes", {
  children: PropTypes.node,
  hide: PropTypes.bool,
  hover: PropTypes.bool,
  fitContent: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  textAlign: PropTypes.oneOf(['right', 'left', 'center']),
  tooltipContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
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

var CandidateSearchFilter =
/*#__PURE__*/
function (_PureComponent) {
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
    return React.createElement("div", {
      className: "collapsable-box"
    }, React.createElement("div", {
      className: headerClasses,
      "data-test": "collapsable-box-header"
    }, this.props.title, React.createElement("div", {
      role: "button",
      tabIndex: 0,
      onClick: this.toggleExpanded,
      onKeyDown: this.handleKeyDown,
      "data-test": "collapsable-box-icon-button"
    }, React.createElement("i", {
      className: iconClasses,
      "data-test": "collapsable-box-icon"
    }))), this.state.expanded && React.createElement("div", {
      className: "collapsable-box__body",
      "data-test": "collapsable-box-body"
    }, this.props.nonScrollableContent && React.createElement("span", {
      "data-test": "collapsable-box-non-scrollable-content"
    }, this.props.nonScrollableContent), React.createElement("div", {
      className: scrollableClass,
      "data-test": "collapsable-box-children-container"
    }, this.props.children)));
  };

  return CandidateSearchFilter;
}(PureComponent);

_defineProperty(CandidateSearchFilter, "propTypes", {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  defaultExpanded: PropTypes.bool,
  nonScrollableContent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string.isRequired,
  scrollable: PropTypes.bool
});

_defineProperty(CandidateSearchFilter, "defaultProps", {
  defaultExpanded: true,
  nonScrollableContent: null,
  scrollable: false
});

var Drawer =
/*#__PURE__*/
function (_PureComponent) {
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
    return this.props.isOpen ? React.createElement("div", {
      className: overlayClasses,
      "data-test": "drawer-overlay"
    }, React.createElement("div", {
      className: drawerClasses,
      "data-test": "drawer"
    }, React.createElement("div", {
      className: "molecules-drawer__header"
    }, React.createElement("i", {
      role: "button",
      tabIndex: "0",
      className: "fa fa-close drawer__exit-icon",
      onClick: this.props.onExitClick,
      "data-test": "exit-icon"
    }), React.createElement("div", {
      className: "molecules-drawer__title",
      "data-test": "title"
    }, this.props.title)), React.createElement("div", {
      className: "molecules-drawer__body"
    }, this.props.children))) : null;
  };

  return Drawer;
}(PureComponent);

_defineProperty(Drawer, "defaultProps", {
  hideForDesktop: true
});

_defineProperty(Drawer, "propTypes", {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onExitClick: PropTypes.func.isRequired,
  hideForDesktop: PropTypes.bool
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

      this.componentNode = findDOMNode(this.getInstance());
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = findDOMNode(this.getInstance());
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
      return createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(Component), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}

var Dropdown =
/*#__PURE__*/
function (_PureComponent) {
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

    return React.createElement("div", {
      className: "molecules-dropdown"
    }, React.createElement("div", {
      role: "button",
      tabIndex: 0,
      onClick: this.toggleDropdown,
      className: "molecules-dropdown__selection",
      onKeyDown: function onKeyDown(e) {
        return _this2.handleKeyDown(e);
      },
      "data-test": "dropdown-toggle"
    }, this.props.selectedOptionId && React.createElement("span", {
      "data-test": "selected-text"
    }, this.props.options.find(function (option) {
      return option.id === _this2.props.selectedOptionId;
    }).display), !this.props.selectedOptionId && React.createElement("span", {
      className: "molecules-dropdown__placeholder",
      "data-test": "placeholder"
    }, this.props.placeholderText), React.createElement("i", {
      className: classNames('fa fa-fw', {
        'fa-chevron-down': !this.state.showDropdown,
        'fa-chevron-up': this.state.showDropdown
      })
    })), this.state.showDropdown && React.createElement("div", {
      className: "molecules-dropdown__items",
      "data-test": "dropdown"
    }, this.props.options.map(function (item, index) {
      return React.createElement("p", {
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
}(PureComponent); // Exported for testing


_defineProperty(Dropdown, "propTypes", {
  placeholderText: PropTypes.string,
  selectedOptionId: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func,
    id: PropTypes.number
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
      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(React.Component);

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
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
      ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
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
        children = React.cloneElement(this.props.children);
      }

      this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(React.Component);


Portal$1.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portal$2 = void 0;

if (ReactDOM.createPortal) {
  Portal$2 = Portal;
} else {
  Portal$2 = Portal$1;
}

var Portal$3 = Portal$2;

var Modal =
/*#__PURE__*/
function (_Component) {
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
      'modal__dialog--wide': variant === 'wide',
      'modal__dialog--full': variant === 'full'
    });
    var childrenWithProps = !isLoadingContent ? React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        onClose: onClose
      });
    }) : React.createElement(Loader, {
      inline: true
    });

    if (isOpen) {
      return React.createElement(Portal$3, {
        "data-test": "modal"
      }, React.createElement("div", {
        id: "backdrop",
        className: backdropClasses,
        role: "dialog",
        onClick: this.onBackdropClick
      }, React.createElement("div", {
        id: "dialog",
        className: dialogClasses,
        tabIndex: "-1",
        "aria-labelledby": this.props.aria
      }, React.createElement("div", {
        className: "dialog-container"
      }, childrenWithProps))));
    }

    return null;
  };

  return Modal;
}(Component);

_defineProperty(Modal, "propTypes", {
  // String for the "aria-labeledby" attribute of the modal
  aria: PropTypes.string,
  // React components rendered inside the modal
  children: PropTypes.node.isRequired,
  // Whether or not we should close the modal when the "ESC" key is hit.
  closeOnEsc: PropTypes.bool,
  // Whether or not we should close them modal when the modal overlay is clicked.
  closeOnOverlayClick: PropTypes.bool,
  // If we're loading content, we can display a generic loading icon here.
  isLoadingContent: PropTypes.bool,
  // REQUIRED. When or not the modal is open.
  isOpen: PropTypes.bool.isRequired,
  // REQUIRED. Function to close the modal.
  onClose: PropTypes.func.isRequired,
  // Whether or not to show the modal overlay
  showOverlay: PropTypes.bool,
  // The size of the modal
  variant: PropTypes.oneOf(['default', 'wide', 'full'])
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

var ModalBody =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ModalBody, _PureComponent);

  function ModalBody() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return React.createElement("div", {
      className: "modal-body",
      "data-test": "modal-body"
    }, children);
  };

  return ModalBody;
}(PureComponent);

_defineProperty(ModalBody, "propTypes", {
  // React components rendered inside the modal
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node
});

var ModalHeader =
/*#__PURE__*/
function (_PureComponent) {
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
        return React.createElement("h2", null, children);
      }

      return children;
    });

    return _this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        hideCloseIcon = _this$props.hideCloseIcon,
        onClose = _this$props.onClose;
    return React.createElement("div", {
      className: "modal-header",
      "data-test": "modal-header"
    }, this.renderTitle(), !hideCloseIcon && React.createElement("div", {
      className: "modal-header__icon-wrapper"
    }, React.createElement("i", {
      role: "link",
      tabIndex: 0,
      className: "fa fa-close",
      onClick: onClose
    })));
  };

  return ModalHeader;
}(PureComponent);

_defineProperty(ModalHeader, "propTypes", {
  // Optional prop for showing the modal "x" for closing it
  hideCloseIcon: PropTypes.bool,
  // Function to close the modal - used by close icon
  // eslint-disable-next-line react/require-default-props
  onClose: function onClose(props, propName, componentName) {
    if (!props.hideCloseIcon && typeof props.onClose !== 'function') {
      throw new Error(componentName + " must recieve a valid function for " + propName + " when hideCloseIcon is false");
    }
  },
  // React components rendered inside the modal header
  children: PropTypes.node
});

_defineProperty(ModalHeader, "defaultProps", {
  hideCloseIcon: false
});

var ModalFooter =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ModalFooter, _PureComponent);

  function ModalFooter() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return React.createElement("div", {
      className: "modal-footer",
      "data-test": "modal-footer"
    }, children);
  };

  return ModalFooter;
}(PureComponent);

_defineProperty(ModalFooter, "propTypes", {
  // React components rendered inside the modal
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node
});

export { Button, ButtonGroup, Checkbox, CandidateSearchFilter as CollapsableBox, Drawer, Dropdown$1 as Dropdown, Link, Loader, Modal, ModalBody, ModalFooter, ModalHeader, RadioButton, Tabs, Tooltip, TypeAheadSearch };
//# sourceMappingURL=molecules.esm.js.map
