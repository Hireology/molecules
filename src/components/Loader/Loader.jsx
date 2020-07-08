import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Loader extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    inline: PropTypes.bool,
  };
  static defaultProps = {
    inline: false,
    message: 'Loading...',
  };

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

export default Loader;
