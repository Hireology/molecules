import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './link.scss';

class Link extends PureComponent {
  render() {
    const classes = classNames(
      'btn-link',
      'hireology-link',
      this.props.additionalClasses,
      {
        [`hireology-link--${this.props.type}`]: this.props.type,
      },
    );

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

Link.defaultProps = {
  onClick: null,
  disabled: false,
  type: null,
  additionalClasses: null,
  id: null,
};

Link.propTypes = {
  additionalClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['warning', 'danger', 'secondary']),
};

export default Link;
