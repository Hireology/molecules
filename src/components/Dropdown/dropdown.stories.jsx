import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './Dropdown';

const objectDefinition =
  'Array of objects where each object has the attributes "display" of type string, an "id" of type number, and "onClick" of type function';

const notes = {
  notes: {
    markdown: `
      #Dropdown
      ## Props
      | prop name             | prop type            | required | default value      | description |
      | --------------------- | -------------------- | -------- | ------------------ | ----------- |
      | placeholderText       | String               | false    | 'Select an option' | Placeholder to be displayed before an option has been selected |
      | selectedOptionId      | Number               | false    | null               | The currently selected option, if undefined we'll display the placeholder text |
      | options               | ${objectDefinition}  | true     | -                  | Any options that should be included in the dropdown |
    `,
  },
};

class InteractiveDropdown extends React.Component {
  state = {
    selectedOptionId: null,
    options: ['option one', 'option two', 'option three'],
  };

  getActionDisplay = () => (
    <span style={{ color: '#81af32' }}>
      <i className="fa fa-fw fa-plus" />
      Add new option
    </span>
  );

  addNewOption = () => {
    this.setState({ options: [...this.state.options, 'new option'] });
  };

  selectOption = (id) => {
    console.log(id);
    this.setState({ selectedOptionId: id });
  };

  render() {
    const action = {
      display: this.getActionDisplay(),
      onClick: () => this.addNewOption(),
      id: -1,
    };
    const dropdownOptions = [
      action,
      ...this.state.options.map((option, id) => ({
        display: option,
        id: id + 1,
        onClick: () => this.selectOption(id + 1),
      })),
    ];
    return (
      <div style={{ width: 300 }}>
        <Dropdown
          options={dropdownOptions}
          selectedOptionId={this.state.selectedOptionId}
        />
      </div>
    );
  }
}

const OPTIONS = [
  {
    display: 'Option 1',
    onClick: null,
    id: 2,
  },
  {
    display: 'Option 2',
    onClick: null,
    id: 3,
  },
  {
    display: 'Option 3 but with a really really long title',
    onClick: () => null,
    id: 4,
  },
];

storiesOf('Dropdown', module)
  .add(
    'default',
    () => (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 300, marginRight: 50 }}>
          <h3>Default dropdown</h3>
          <Dropdown options={OPTIONS} />
        </div>
        <div style={{ width: 300, marginRight: 50 }}>
          <h3>Custom placeholder text</h3>
          <Dropdown
            options={OPTIONS}
            placeholderText="Custom placeholder text"
          />
        </div>
        <div style={{ width: 300, marginRight: 50 }}>
          <h3>After item has been selected text</h3>
          <Dropdown options={OPTIONS} selectedOptionId={2} />
        </div>
      </div>
    ),
    notes,
  )
  .add('interactive', () => <InteractiveDropdown />, notes);
