import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash/throttle';

class Button extends PureComponent {
  static defaultProps = {
    additionalClasses: '',
    onClick: null,
    onMouseOver: null,
    onMouseOut: null,
    onMouseDown: null,
    disabled: false,
    type: null,
    size: 'medium',
    id: '',
  };

  static propTypes = {
    additionalClasses: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseDown: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'full']),
    type: PropTypes.oneOf([
      'danger',
      'gray',
      'outline',
      'outlineWhite',
      'primary',
      'secondary',
      'unselected',
    ]),
  };

  constructor(props) {
    super(props);
    this.throttledClick = throttle(this.handleClick, 1000);
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render() {
    const classes = classNames(
      this.props.additionalClasses,
      'molecules-button btn',
      `molecules-button--${this.props.size}`,
      {
        [`molecules-button--${this.props.type}`]:
          !this.props.disabled && this.props.type,
      },
    );

    return (
      <button
        id={this.props.id}
        disabled={this.props.disabled}
        onClick={this.throttledClick}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        onMouseDown={this.props.onMouseDown}
        className={classes}
        tabIndex={'0'}
        data-test="button"
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
