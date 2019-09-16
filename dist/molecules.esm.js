import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      activeSuggestionIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (e) {
      var filter = e.target.value;

      if (filter.trim().length > 1) {
        return _this.updateSuggestions(filter);
      } else {
        _this.setState({
          filter: filter,
          suggestions: [],
          activeSuggestionIndex: -1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (filter) {
      _this.setState({
        filter: filter,
        suggestions: [],
        activeSuggestionIndex: -1
      });

      var filteredOptions = filterData(_this.props.data, filter);

      _this.props.onSubmit(filteredOptions, filter);
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
    });

    _defineProperty(_assertThisInitialized(_this), "updateSuggestions", function (filter) {
      var filteredOptions = filterData(_this.props.data, filter);
      var sortedOptions = sortFilteredData(filteredOptions, filter);
      var suggestions = sortedOptions.slice(0, 5);
      var suggestionIsFilter = sortedOptions.length === 1 && sortedOptions[0].value === filter.trim();
      var activeIsTooLarge = _this.state.activeSuggestionIndex > suggestions.length - 1;

      _this.setState({
        filter: filter,
        suggestions: suggestionIsFilter ? [] : [].concat(suggestions),
        activeSuggestionIndex: activeIsTooLarge ? suggestions.length - 1 : _this.state.activeSuggestionIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (_this.state.suggestions.length !== 0 && e.keyCode === 38) {
        _this.setState({
          activeSuggestionIndex: _this.state.activeSuggestionIndex !== -1 ? _this.state.activeSuggestionIndex - 1 : -1
        });
      } else if (_this.state.suggestions.length !== 0 && e.keyCode === 40) {
        _this.setState({
          activeSuggestionIndex: _this.state.activeSuggestionIndex !== _this.state.suggestions.length - 1 ? _this.state.activeSuggestionIndex + 1 : _this.state.suggestions.length - 1
        });
      } else if (e.keyCode === 13) {
        var filter = _this.state.activeSuggestionIndex > -1 ? _this.state.suggestions[[_this.state.activeSuggestionIndex]].value : _this.state.filter;

        _this.onSubmit(filter);
      }
    });

    return _this;
  }

  var _proto = TypeAheadSearch.prototype;

  _proto.render = function render() {
    var _this2 = this;

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
    }), this.state.suggestions.length > 0 && React.createElement("div", {
      className: "molecules-type-ahead-search__type-ahead",
      "data-test": "type-ahead-dropdown"
    }, this.state.suggestions.map(function (suggestion, index) {
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
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  initialFilter: PropTypes.string,
  placeholder: PropTypes.string
});

_defineProperty(TypeAheadSearch, "defaultProps", {
  initialFilter: '',
  placeholder: ''
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

export { Button, ButtonGroup, Checkbox, Link, Loader, RadioButton, Tabs, TypeAheadSearch };
//# sourceMappingURL=molecules.esm.js.map
