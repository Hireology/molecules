/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';

const valueTypes = 'String, Number, or Boolean';

const notes = {
  notes: {
    markdown: `
      #RadioButton
      ## Props
      | prop name       | prop type     | required | default value      | description |
      | --------------- | ------------- | -------- | ------------------ | ----------- |
      | checked         | Boolean       | false    | false              | Whether radio button is checked or not |
      | extraClassNames | String        | false    | ""                 | Extra classnames to add to wrapper |
      | disabled        | Boolean       | false    | false              | Whether radio button is disabled or not |
      | id              | String        | false    | ""                 | Radio button id |
      | inline          | Boolean       | false    | false              | Whether to make radio button inline or not |
      | label           | String        | true     | -                  | Radio button label |
      | name            | String        | false    | "radioButtonGroup" | Input group name |
      | onChange        | Function      | true     | -                  | Function to call on radio button change |
      | value           | ${valueTypes} | true     | -                  | Radio button value |
    `,
  },
};

class StorybookRadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
    };
  }

  radioOnChange = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <div>
        <RadioButton
          name="storybookRadioButton"
          checked={this.state.selectedIndex === 1}
          label="First option"
          onChange={() => this.radioOnChange(1)}
          id={1}
          value={1}
        />
        <RadioButton
          name="storybookRadioButton"
          checked={this.state.selectedIndex === 2}
          label="Second option"
          onChange={() => this.radioOnChange(2)}
          id={2}
          value={2}
        />
        <RadioButton
          name="storybookRadioButton"
          checked={this.state.selectedIndex === 3}
          label="Third option"
          onChange={() => this.radioOnChange(3)}
          id={3}
          value={3}
        />
      </div>
    );
  }
}

storiesOf('RadioButton', module)
  .add(
    'default',
    () => (
      <div>
        <RadioButton
          label="Unselected option"
          onChange={() => null}
          value={1}
        />
        <RadioButton
          checked
          label="Selected option"
          onChange={() => null}
          value={2}
        />
        <RadioButton
          disabled
          label="Disabled option"
          onChange={() => null}
          value={4}
        />
      </div>
    ),
    notes,
  )
  .add(
    'inline',
    () => (
      <div>
        <RadioButton
          inline
          label="Unselected option"
          onChange={() => null}
          value={1}
        />
        <RadioButton
          inline
          checked
          label="Selected option"
          onChange={() => null}
          value={2}
        />
        <RadioButton
          inline
          disabled
          label="Disabled option"
          onChange={() => null}
          value={4}
        />
      </div>
    ),
    notes,
  )
  .add('interactive', () => <StorybookRadioButton />, notes);
