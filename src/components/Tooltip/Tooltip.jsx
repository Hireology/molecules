import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './tooltip.scss';

class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    hide: PropTypes.bool,
    hover: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    textAlign: PropTypes.oneOf(['right', 'left', 'center']),
    tooltipContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
      .isRequired,
    width(props, propName) {
      if (
        props[propName] &&
        !/^(small|medium|large)|\d+(em|px)/.test(props[propName])
      ) {
        return new Error(
          `Invalid prop ${propName} supplied to Tooltip. Please supply 'small', 'medium', 'large', or a width measured in em or px.`,
        );
      }
      return null;
    },
  };

  static defaultProps = {
    children: null,
    hide: false,
    hover: true,
    position: 'top',
    textAlign: 'left',
    width: 'medium',
  };

  /**
   * Returns true if this.props.width is a preset string
   */
  useWidthPreset = () => {
    return /^(small|medium|large)/.test(this.props.width);
  };

  /**
   * Returns true if this.props.width is a a custom width
   */
  useWidthValue = () => {
    return /^\d+(em|px)/.test(this.props.width);
  };

  render() {
    const tooltipClasses = classNames(
      `molecules-tooltip molecules-tooltip--${
        this.props.position
      } molecules-tooltip--align-${this.props.textAlign}`,
      {
        [`molecules-tooltip--${this.props.width}`]: this.useWidthPreset(),
        'molecules-tooltip--hover': this.props.hover,
      },
    );
    const tooltipHoverStyle = classNames({
      'molecules-tooltip-wrapper__hover': this.props.hover,
    });
    const tooltipStyle = this.useWidthValue()
      ? { width: this.props.width }
      : null;
    return (
      <div className="molecules-tooltip-wrapper">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <span className={tooltipHoverStyle} tabIndex={0}>
          {this.props.children || (
            <i
              className="fa fa-fw fa-question-circle molecules-tooltip-wrapper__icon"
              data-test="tooltip-icon"
            />
          )}
        </span>
        {!this.props.hide && (
          <div
            className={tooltipClasses}
            style={tooltipStyle}
            data-test="tooltip"
          >
            {this.props.tooltipContent}
          </div>
        )}
      </div>
    );
  }
}

export default Tooltip;
