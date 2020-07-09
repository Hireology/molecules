/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import NestedDropdownMenu from './NestedDropdownMenu';

const CARS = [
  { label: 'Ford', value: 'ford', allowAddNew: true },
  {
    label: 'Honda',
    value: 'honda',
    allowAddNew: true,
    children: [
      {
        label: 'Accord',
        value: 'accord',
        allowAddNew: true,
        onAddNewClick: () => alert('Im a nested function in the array!'),
        children: [
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Blue', value: 'blue' },
          { label: 'Yellow', value: 'yellow' },
          { label: 'Purple', value: 'purple' },
        ],
      },
      { label: 'Civic', value: 'civic' },
      { label: 'Pilot', value: 'pilot' },
      { label: 'Ridgeline', value: 'ridgeline' },
      { label: 'Super Cool and Super Long Text Like Lorem Ipsum but Different huh!?', value: 'lol' },
    ],
  },
  {
    label: 'Toyota',
    value: 'toyota',
    allowAddNew: true,
    children: [
      { label: 'Camry', value: 'camry' },
      { label: 'Tacoma', value: 'tacoma' },
      { label: 'Tundra', value: 'tundra' },
    ],
  },
  {
    label: 'Volkswagen',
    value: 'volkswagen',
    children: [
      { label: 'Beetle', value: 'beetle' },
      { label: 'Golf', value: 'golf' },
      { label: 'Jetta', value: 'jetta' },
      { label: 'Passat', value: 'passat' },
      { label: 'Rabbit', value: 'rabbit' },
      { label: 'Tiguan', value: 'tiguan' },
      { label: 'Vanagon', value: 'vanagon' },
    ],
  },
];

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    padding: '1rem',
    margin: '0 auto',
    width: '80%',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '20px',
    lineHeight: '1',
  },
};

const notes = {
  notes: {
    markdown: `
      # NestedDropdownMenu

      ## Props

      | Prop                | Type    | Required | Default   | Description                                                                                 |
      |---------------------|---------|----------|-----------|---------------------------------------------------------------------------------------------|
      | onClose             | func    | *        | undefined | Handles closing the dropdown internally                                                     |
      | isOpen              | bool    | *        | false     | Display status of the dropdown                                                              |
      | children            | element | *        | undefined | Element that triggers the dropdown and is used for positioning                              |
      | items               | array   | *        | undefined | Array of items for the dropdown (see below for more information)                            |
      | onItemClick         | func    | *        | undefined | Function that fires when a childless item is clicked (receives the item as a param)         |
      | closeOnOutsideClick | bool    |          | true      | Whether to close the dropdown when clicking outside the box                                 |
      | onAddNewClick       | func    |          | undefined | Function that fires when clicking the add new row or button (receives parent info as param) |
      | placement           | string  |          | bottom    | placement of dropdown relative to the trigger element                                       |

      For placement options, see [Popper v1 docs](https://popper.js.org/docs/v1/#Popper.placements)

      ### Items Prop

      The array of items sent down as the items prop needs to have a label and value at the very least, but also makes use of the following key options:

      | Prop          | Type          | Required | Default   | Description                                                                                    |
      |---------------|---------------|----------|-----------|------------------------------------------------------------------------------------------------|
      | label         | string        | *        | null      | String that displays and represents the item visually                                          |
      | value         | string/number | *        | null      | String/Number that's unique to the item                                                        |
      | children      | array         |          | undefined | Array of items (with these same prop options)                                                  |
      | allowAddNew   | bool          |          | undefined | If present, it will show the add new button if children are present, otherwise the add new row |
      | onAddNewClick | func          |          | undefined | If present, it will override the general onAddNewClick prop                                    |
      | onItemClick   | func          |          | undefined | If present, it will override the general onItemClick prop 
    `,
  },
};

class BasicNestedDropdown extends React.Component {
  state = {
    isOpen: false,
  };

  onAddNewClick = (params) => {
    alert(
      `Action fired from the onAddNewClick prop!\n${JSON.stringify(
        params,
        null,
        2,
      )}`,
    );
  };

  handleItemClick = (item) => {
    alert(
      `Action fired from the onItemClick prop!\n${JSON.stringify(
        item,
        null,
        2,
      )}`,
    );
  };

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div style={styles.wrapper, { textAlign: 'center' }}>
        <div>
          <NestedDropdownMenu
            isOpen={this.state.isOpen}
            onClose={this.toggleDropdown}
            items={CARS}
            onItemClick={this.handleItemClick}
            onAddNewClick={this.onAddNewClick}
            showFilter
          >
            <button onClick={this.toggleDropdown}>Open Dropdown</button>
          </NestedDropdownMenu>
        </div>

        <div style={styles.description}>
          <pre>
            <code>{JSON.stringify(CARS, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

storiesOf('NestedDropdownMenu', module).add(
  'default',
  () => <BasicNestedDropdown />,
  notes,
);
