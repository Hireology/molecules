import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttonGroup.scss';

const ButtonGroup = (props) => {
  const classes = classNames('molecules-button-group', props.extraClassNames, {
    [`molecules-button-group--${props.align}`]: props.align,
    [`molecules-button-group--${props.size}`]: props.size,
  });
  return (
    <div className={classes} data-test="button-group">
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justified']),
  size: PropTypes.oneOf(['medium', 'small', 'full']),
  extraClassNames: PropTypes.string,
};

ButtonGroup.defaultProps = {
  align: null,
  size: null,
  extraClassNames: '',
};

export default ButtonGroup;
