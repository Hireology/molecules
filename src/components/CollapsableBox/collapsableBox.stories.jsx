import React from 'react';
import { storiesOf } from '@storybook/react';
import CollapsableBox from './CollapsableBox';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

const notes = {
  notes: {
    markdown: `
      #Collapsable Box
      ## Props
      | prop name            | prop type              | required | default value | description |
      | -------------------- | ---------------------- | -------- | ------------- | ----------- |
      | children             | Node or array of nodes | true     | -             | Content to be displayed in body of box |
      | isExpanded           | Boolean                | false    | true          | Whether or not the body of the box should be expanded |
      | nonScrollableContent | Node or array of nodes | false    | null          | Any content that should not scroll inside a scrollable box |
      | title                | String                 | true     | -             | Title of box |
      | scrollable           | Boolean                | false    | false         | Whether or not the body of the box should be scrollable after 200px |
      | handleToggle         | Function               | true     | -             | Function to handle toggle |
    `,
  },
};
const buttons = ['box1', 'box2', 'box3', 'box4'];

export default class CollapsableBoxStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box1: true,
      box2: false,
      box3: true,
      box4: true,
    };
  }

  handleToggle = (boxName) => {
    this.setState({
      [boxName]: !this.state[boxName],
    });
  };

  handleToggleAll = (toggleTo) => {
    buttons.map((button) => {
      this.setState({
        [button]: toggleTo,
      });
    });
  };

  render() {
    return (
      <div>
        <div
          className="buttonGroupList"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div className="buttonGroup" style={{ margin: '5px' }}>
            <ButtonGroup align="center">
              {buttons.map((buttonName, idx) => {
                return (
                  <Button
                    type="primary"
                    style={{ margin: '5px' }}
                    onClick={() => this.handleToggle(buttonName)}
                  >
                    {this.state[buttonName]
                      ? `Collapse Box ${idx + 1}`
                      : `Expand Box ${idx + 1}`}
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>
          <div className="buttonGroup" style={{ marginBottom: '5px' }}>
            <ButtonGroup align="center">
              <Button
                onClick={() => this.handleToggleAll(true)}
                disabled={
                  this.state.box1 &&
                  this.state.box2 &&
                  this.state.box3 &&
                  this.state.box4
                }
              >
                Expand All Boxes
              </Button>
              <Button
                onClick={() => this.handleToggleAll(false)}
                disabled={
                  !(
                    this.state.box1 ||
                    this.state.box2 ||
                    this.state.box3 ||
                    this.state.box4
                  )
                }
              >
                Collapse All Boxes
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ width: '300px', display: 'inline-block' }}>
            <CollapsableBox
              title="Default Box"
              isExpanded={this.state.box1}
              handleToggle={() => this.handleToggle('box1')}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </CollapsableBox>
          </div>
          <div style={{ width: '300px', display: 'inline-block' }}>
            <CollapsableBox
              title="Initially Collapsed Box"
              defaultExpanded={false}
              isExpanded={this.state.box2}
              handleToggle={() => this.handleToggle('box2')}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </CollapsableBox>
          </div>
          <div style={{ width: '300px', display: 'inline-block' }}>
            <CollapsableBox
              title="Scrollable Box"
              isExpanded={this.state.box3}
              handleToggle={() => this.handleToggle('box3')}
              scrollable
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </CollapsableBox>
          </div>
          <div style={{ width: '300px', display: 'inline-block' }}>
            <CollapsableBox
              title="Partially Scrollable Box"
              isExpanded={this.state.box4}
              handleToggle={() => this.handleToggle('box4')}
              scrollable
              nonScrollableContent={
                <div style={{ paddingBottom: 10 }}>
                  This text will not scroll, but the text below it will.
                </div>
              }
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </CollapsableBox>
          </div>
        </div>
      </div>
    );
  }
}

storiesOf('CollapsableBox', module).add(
  'default',
  () => <CollapsableBoxStory />,
  notes,
);
