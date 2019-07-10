import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './link.scss';

const Link = (props) => {
  const classes = classNames(
    'btn-link',
    'hireology-link',
    props.additionalClasses,
    {
      [`hireology-link--${props.type}`]: props.type,
    },
  );

  return (
    <button
      className={classes}
      id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
      tabIndex={0}
      data-test="link"
    >
      {props.children}
    </button>
  );
};

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
