import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup';

class Tabs extends PureComponent {
  static propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']),
  };

  static defaultProps = {
    type: 'primary',
  };

  render() {
    return (
      <ButtonGroup>
        {this.props.tabs.map((tab, index) => {
          const className = classNames('molecules-tab', {
            'molecules-tab--primary': this.props.type === 'primary',
            'molecules-tab--secondary': this.props.type === 'secondary',
            'molecules-tab--active': this.props.activeIndex === index,
          });

          return (
            <button
              className={className}
              onClick={() => this.props.onClick(index)}
              data-unit-test="tab"
              data-test={`tab-${index}`}
              key={tab}
            >
              {tab}
            </button>
          );
        })}
      </ButtonGroup>
    );
  }
}

export default Tabs;
