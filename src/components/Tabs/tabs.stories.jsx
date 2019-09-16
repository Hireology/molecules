/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '../Tabs';

const valueTypes = '"primary" or "secondary"';

const notes = {
  notes: {
    markdown: `
      #Tabs
      ## Props
      | prop name   | prop type     | required | default value | description |
      | ----------- | ------------- | -------- | ------------- | ----------- |
      | activeIndex | number        | true     | -             | The index of the active tab in the tabs array |
      | onClick     | function      | true     | -             | A function to call on tab click, accepts a prop of the selected tab index |
      | tabs        | string[]      | true     | -             | Array of tab titles, order is important |
      | type        | ${valueTypes} | false    | "primary"     | Wether this is the primary page tabs, or secondary navigation |
    `,
  },
};

class StorybookTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  tabOnChange = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <Tabs
        activeIndex={this.state.selectedIndex}
        tabs={[
          'Locations',
          'Jobs',
          'Candidates',
          'Onboarding',
          'Hiring Steps',
          'Insights',
        ]}
        onClick={this.tabOnChange}
        type={this.props.type}
      />
    );
  }
}

storiesOf('Tabs', module).add(
  'types',
  () => (
    <div>
      <h1>Primary:</h1>
      <StorybookTabs type="primary" />
      <h1>Secondary:</h1>
      <StorybookTabs type="secondary" />
    </div>
  ),
  notes,
);
