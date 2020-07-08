import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    const overlayClasses = classNames('molecules-drawer__overlay', {
      'molecules-drawer__overlay--hideForDesktop': this.props.hideForDesktop,
    });
    const drawerClasses = classNames('molecules-drawer', {
      'molecules-drawer--hideForDesktop': this.props.hideForDesktop,
    });
    return this.props.isOpen ? (
      <div className={overlayClasses} data-test="drawer-overlay">
        <div className={drawerClasses} data-test="drawer">
          <div className="molecules-drawer__header">
            <i
              role="button"
              tabIndex="0"
              className="fa fa-close drawer__exit-icon"
              onClick={this.props.onExitClick}
              data-test="exit-icon"
            />
            <div className="molecules-drawer__title" data-test="title">
              {this.props.title}
            </div>
          </div>
          <div className="molecules-drawer__body">{this.props.children}</div>
        </div>
      </div>
    ) : null;
  }
}

export default Drawer;
