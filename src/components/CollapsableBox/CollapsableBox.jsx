import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class CandidateSearchFilter extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    defaultExpanded: PropTypes.bool,
    isExpanded: PropTypes.bool,
    nonScrollableContent: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    scrollable: PropTypes.bool,
    handleToggle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    defaultExpanded: true,
    isExpanded: true,
    nonScrollableContent: null,
    scrollable: false,
  };

  // state = {
  //   expanded: this.props.isExpanded || this.props.defaultExpanded,
  // };

  toggleExpanded = () => {
    // this.setState({ expanded: !this.props.isExpanded });
    this.props.handleToggle(!this.props.isExpanded, this.props.name);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      this.toggleExpanded();
    }
  };

  render() {
    const headerClasses = classNames('collapsable-box__header', {
      'collapsable-box__header--closed': !this.props.isExpanded,
    });
    const scrollableClass = classNames({
      'collapsable-box__body--scrollable': this.props.scrollable,
    });
    const iconClasses = classNames('fa collapsable-box__icon', {
      'fa-minus-square': this.props.isExpanded,
      'fa-plus-square': !this.props.isExpanded,
    });

    return (
      <div className="collapsable-box">
        <div className={headerClasses} data-test="collapsable-box-header">
          {this.props.title}
          <div
            role="button"
            tabIndex={0}
            onClick={this.toggleExpanded}
            onKeyDown={this.handleKeyDown}
            data-test="collapsable-box-icon-button"
          >
            <i className={iconClasses} data-test="collapsable-box-icon" />
          </div>
        </div>
        {this.props.isExpanded && (
          <div
            className="collapsable-box__body"
            data-test="collapsable-box-body"
          >
            {this.props.nonScrollableContent && (
              <span data-test="collapsable-box-non-scrollable-content">
                {this.props.nonScrollableContent}
              </span>
            )}
            <div
              className={scrollableClass}
              data-test="collapsable-box-children-container"
            >
              {this.props.children}
            </div>
          </div>
        )}
      </div>
    );
  }
}
