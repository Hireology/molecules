import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './drawer.scss';

class Drawer extends PureComponent {
  static defaultProps = {
    hideForDesktop: true,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onExitClick: PropTypes.func.isRequired,
    hideForDesktop: PropTypes.bool,
  };

  render() {
    const overlayClasses = classNames('drawer__overlay', {
      'drawer__overlay--hideForDesktop': this.props.hideForDesktop,
    });
    const drawerClasses = classNames('drawer', {
      'drawer--hideForDesktop': this.props.hideForDesktop,
    });
    return this.props.isOpen ? (
      <div className={overlayClasses} data-test="drawer-overlay">
        <div className={drawerClasses} data-test="drawer">
          <div className="drawer__header">
            <i
              role="button"
              tabIndex="0"
              className="fa fa-close drawer__exit-icon"
              onClick={this.props.onExitClick}
              data-test="exit-icon"
            />
            <div className="drawer__title" data-test="title">
              {this.props.title}
            </div>
          </div>
          <div className="drawer__body">{this.props.children}</div>
        </div>
      </div>
    ) : null;
  }
}

export default Drawer;
