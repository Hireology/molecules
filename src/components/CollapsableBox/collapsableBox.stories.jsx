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
      | defaultExpanded      | Boolean                | false    | true          | Wether the box should initially be expanded or collapsed |
      | nonScrollableContent | Node or array of nodes | false    | null          | Any content that should not scroll inside a scrollable box |
      | title                | String                 | true     | -             | Title of box |
      | scrollable           | Boolean                | false    | false         | Wether or not the body of the box should be scrollable after 200px |
    `,
  },
};

export default class CollapsableBoxStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box1: false,
      box2: true,
      box3: false,
      box4: true,
    };
    this.buttons = ['box1', 'box2', 'box3', 'box4'];
  }

  handleToggle = (value, boxName) => {
    console.log(`handle ${boxName} collapse fired`, value);
    this.setState({
      [boxName]: value,
    });
  };

  handleToggleAll = (toggleTo) => {
    this.buttons.map((button) => {
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
              {this.buttons.map((buttonName, idx) => {
                return (
                  <Button
                    type="primary"
                    style={{ margin: '5px' }}
                    onClick={() =>
                      this.handleToggle(!this.state[buttonName], buttonName)
                    }
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
              name="box1"
              title="Default Box"
              isExpanded={this.state.box1}
              handleToggle={this.handleToggle}
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
              name="box2"
              title="Initially Collapsed Box"
              defaultExpanded={false}
              isExpanded={this.state.box2}
              handleToggle={this.handleToggle}
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
              <button onClick={() => this.handleToggle(false, 'box2')}>
                CLOSE BOX 2
              </button>
            </CollapsableBox>
          </div>
          <div style={{ width: '300px', display: 'inline-block' }}>
            <CollapsableBox
              name="box3"
              title="Scrollable Box"
              isExpanded={this.state.box3}
              handleToggle={this.handleToggle}
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
              name="box4"
              title="Partially Scrollable Box"
              isExpanded={this.state.box4}
              handleToggle={this.handleToggle}
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
