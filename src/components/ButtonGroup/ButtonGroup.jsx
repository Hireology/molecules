import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ButtonGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    align: PropTypes.oneOf(['left', 'right', 'center', 'justified']),
    size: PropTypes.oneOf(['medium', 'small', 'full']),
    extraClassNames: PropTypes.string,
  };
  static defaultProps = {
    align: null,
    size: null,
    extraClassNames: '',
  };

  render() {
    const classes = classNames(
      'molecules-button-group',
      this.props.extraClassNames,
      {
        [`molecules-button-group--${this.props.align}`]: this.props.align,
        [`molecules-button-group--${this.props.size}`]: this.props.size,
      },
    );
    return (
      <div className={classes} data-test="button-group">
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
