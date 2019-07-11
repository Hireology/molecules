import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

const notes = {
  notes: {
    markdown: `
      #Checkbox
      ## Props
      | prop name   | prop type    | required | default value | description |
      | ----------- | ---------    | -------- | ------------- | ----------- |
      | id          | String       | true     | -             | Checkbox Id |
      | label       | String       | true     | -             | Label text |
      | checked     | Bool         | false    | false         | Whether or not box should be checked |
      | onChange    | Function     | false    | null          | Function to call on change |
    `,
  },
};

class StorybookCheckboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOneChecked: false,
      optionTwoChecked: true,
      optionThreeChecked: false,
    };
  }

  toggleCheckbox = (option) => {
    this.setState({ [option]: !this.state[option] });
  };

  render() {
    return (
      <div>
        <Checkbox
          id="1"
          label="Option 1"
          checked={this.state.optionOneChecked}
          onChange={() => this.toggleCheckbox('optionOneChecked')}
        />
        <Checkbox
          id="2"
          label="Option 2"
          checked={this.state.optionTwoChecked}
          onChange={() => this.toggleCheckbox('optionTwoChecked')}
        />
        <Checkbox
          id="3"
          label="Option 3"
          checked={this.state.optionThreeChecked}
          onChange={() => this.toggleCheckbox('optionThreeChecked')}
        />
      </div>
    );
  }
}

storiesOf('Checkbox', module).add(
  'default',
  () => {
    return <StorybookCheckboxes />;
  },
  notes,
);
