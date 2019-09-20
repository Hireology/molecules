/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import RadioButton from '../RadioButton';

const tooltipText =
  'This is a tooltip. It offers extra non-crucial information about whatever you happen to be looking at.';

class CustomSizeTooltip extends React.Component {
  state = {
    width: 10,
  };

  onIncreaseClick = () => this.setState({ width: this.state.width + 1 });
  onDecreaseClick = () => this.setState({ width: this.state.width - 1 });

  render() {
    return (
      <div>
        Custom sized {this.state.width}em tooltip
        <Tooltip
          tooltipContent={tooltipText}
          position="right"
          width={`${this.state.width}em`}
        />
        <div>
          <ButtonGroup>
            <Button onClick={this.onIncreaseClick} type="primary">
              Increase width
            </Button>
            <Button onClick={this.onDecreaseClick} type="secondary">
              Decrease width
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

class CustomSizeChildren extends React.Component {
  state = {
    height: 10,
    width: 10,
    position: 'right',
  };

  onIncreaseClick = (dimension) =>
    this.setState({ [dimension]: this.state[dimension] + 1 });
  onDecreaseClick = (dimension) =>
    this.setState({ [dimension]: this.state[dimension] - 1 });
  radioOnChange = (position) => this.setState({ position });

  render() {
    return (
      <div>
        <div style={{ padding: 20 }}>
          <ButtonGroup>
            <Button
              onClick={() => this.onIncreaseClick('width')}
              type="primary"
            >
              Increase width
            </Button>
            <Button
              onClick={() => this.onDecreaseClick('width')}
              type="secondary"
            >
              Decrease width
            </Button>
            <Button
              onClick={() => this.onIncreaseClick('height')}
              type="primary"
            >
              Increase height
            </Button>
            <Button
              onClick={() => this.onDecreaseClick('height')}
              type="secondary"
            >
              Decrease height
            </Button>
          </ButtonGroup>
          <RadioButton
            inline
            name="position"
            checked={this.state.position === 'top'}
            label="Top"
            onChange={() => this.radioOnChange('top')}
            id={'top'}
            value={'top'}
          />
          <RadioButton
            inline
            name="position"
            checked={this.state.position === 'right'}
            label="Right"
            onChange={() => this.radioOnChange('right')}
            id={'right'}
            value={'right'}
          />
          <RadioButton
            inline
            name="position"
            checked={this.state.position === 'bottom'}
            label="Bottom"
            onChange={() => this.radioOnChange('bottom')}
            id={'bottom'}
            value={'bottom'}
          />
          <RadioButton
            inline
            name="position"
            checked={this.state.position === 'left'}
            label="Left"
            onChange={() => this.radioOnChange('left')}
            id={'left'}
            value={'left'}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '50px 0',
          }}
        >
          <Tooltip tooltipContent={tooltipText} position={this.state.position}>
            <div
              style={{
                width: `${this.state.width}em`,
                height: `${this.state.height}em`,
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Hover on me
            </div>
          </Tooltip>
        </div>
      </div>
    );
  }
}

class ShowOnClickTooltip extends React.Component {
  state = { show: false };

  toggleTooltip = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        <Button onClick={this.toggleTooltip} type="primary">
          {this.state.show ? 'Hide tooltip' : 'Show tooltip'}
        </Button>
        <div style={{ marginTop: 20 }}>
          This tooltip will only be shown when the button is clicked.
          <Tooltip
            tooltipContent={tooltipText}
            hover={false}
            position="right"
            hide={!this.state.show}
          />
        </div>
      </div>
    );
  }
}

/*
children: PropTypes.node,
    hide: PropTypes.bool,
    hover: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    textAlign: PropTypes.oneOf(['right', 'left', 'center']),
    tooltipContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
      .isRequired,
    width(props, propName) {
      */
const widthProps = "'small', 'medium', 'large' or width value in em/px";
const notes = {
  notes: {
    markdown: `
      #TypeAheadSearch
      ## Props
      | prop name      | prop type      | required | default value | description |
      | -------------- | -------------- | -------- | ------------- | ----------- |
      | children       | node           | false    | -             | The jsx our tooltip points to, if no children are passed we display an icon  |
      | hide           | Boolean        | false    | false         | Wether to hide the tooltip or not, if hover is false this fully determines when the tooltip is shown |
      | hover          | Boolean        | false    | true          | If true, the tooltip will be shown on hover as long as hide is also false |
      | position       | String         | false    | 'top'         | What direction the tooltip should be in relation to the icon/children |
      | textAlign      | String         | false    | 'left'        | How the text should align inside the tooltip |
      | tooltipContent | String or node | true     | -             | Either the text, or jsx to display inside the  tooltip |
      | width          | ${widthProps}  | false    | 'medium'      | Tooltip width |
      `,
  },
};

storiesOf('Tooltip', module)
  .add(
    'position',
    () => (
      <div
        style={{
          padding: '100px 20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          Positioned right
          <Tooltip tooltipContent={tooltipText} position="right" />
        </div>
        <div>
          Positioned top
          <Tooltip tooltipContent={tooltipText} />
        </div>
        <div>
          Positioned bottom
          <Tooltip tooltipContent={tooltipText} position="bottom" />
        </div>
        <div>
          Positioned left
          <Tooltip tooltipContent={tooltipText} position="left" />
        </div>
      </div>
    ),
    notes,
  )
  .add(
    'tooltip size',
    () => (
      <div style={{ padding: '30px 20px' }}>
        <div style={{ padding: '10px 0px' }}>
          Large tooltip
          <Tooltip
            tooltipContent={tooltipText}
            position="right"
            width="large"
          />
        </div>
        <div style={{ padding: '10px 0px' }}>
          Medium tooltip
          <Tooltip
            tooltipContent={tooltipText}
            position="right"
            width="medium"
          />
        </div>
        <div style={{ padding: '10px 0px' }}>
          Small tooltip
          <Tooltip
            tooltipContent={tooltipText}
            position="right"
            width="small"
          />
        </div>
        <div style={{ padding: '10px 0px' }}>
          <CustomSizeTooltip />
        </div>
      </div>
    ),
    notes,
  )
  .add(
    'text align',
    () => (
      <div style={{ padding: '30px 20px' }}>
        <div style={{ padding: '10px 0px' }}>
          Text align right
          <Tooltip
            tooltipContent={tooltipText}
            position="right"
            textAlign="right"
          />
        </div>
        <div style={{ padding: '10px 0px' }}>
          Text align center
          <Tooltip
            tooltipContent={tooltipText}
            position="right"
            textAlign="center"
          />
        </div>
        <div style={{ padding: '10px 0px' }}>
          Text align left
          <Tooltip
            tooltipContent={tooltipText}
            position="right"
            textAlign="left"
          />
        </div>
      </div>
    ),
    notes,
  )
  .add('children size', () => <CustomSizeChildren />, notes)
  .add('custom show/hide', () => <ShowOnClickTooltip />, notes);
