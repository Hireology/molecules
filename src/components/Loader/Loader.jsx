import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './loader.scss';

class Loader extends PureComponent {
  render() {
    const classes = classnames('molecules-loader', {
      'molecules-loader--inline': this.props.inline,
    });

    return (
      <div className={classes} data-test="loader">
        <div className="molecules-loader__dots-container">
          <div className="molecules-loader__dots" data-test="message">
            {/* This text is only seen by screen readers */}
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

Loader.defaultProps = {
  inline: false,
  message: 'Loading...',
};

Loader.propTypes = {
  message: PropTypes.string,
  inline: PropTypes.bool,
};

export default Loader;
