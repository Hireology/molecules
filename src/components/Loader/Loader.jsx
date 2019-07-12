import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './loader.scss';

const Loader = (props) => {
  const classes = classnames('molecules-loader', {
    'molecules-loader--inline': props.inline,
  });

  return (
    <div className={classes} data-test="loader">
      <div className="molecules-loader__dots-container">
        <div className="molecules-oader__dots" data-test="message">
          {/* This text is only seen by screen readers */}
          {props.message}
        </div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  inline: false,
  message: 'Loading...',
};

Loader.propTypes = {
  message: PropTypes.string,
  inline: PropTypes.bool,
};

export default Loader;
