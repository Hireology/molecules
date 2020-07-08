import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Link extends PureComponent {
  static propTypes = {
    additionalClasses: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['warning', 'danger', 'secondary']),
  };
  static defaultProps = {
    onClick: null,
    disabled: false,
    type: null,
    additionalClasses: null,
    id: null,
  };

  render() {
    const classes = classNames('molecules-link', this.props.additionalClasses, {
      [`molecules-link--${this.props.type}`]: this.props.type,
    });

    return (
      <button
        className={classes}
        id={this.props.id}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        tabIndex={0}
        data-test="link"
      >
        {this.props.children}
      </button>
    );
  }
}

export default Link;
