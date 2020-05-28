/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import NestedDropdownMenu from './NestedDropdownMenu';

const CARS = [
  {
    label: 'Honda',
    value: 'honda',
    children: [
      { label: 'Accord', value: 'accord' },
      { label: 'Civic', value: 'civic' },
      { label: 'Pilot', value: 'pilot' },
      { label: 'Ridgeline', value: 'ridgeline' },
    ],
  },
  {
    label: 'Toyota',
    value: 'toyota',
    children: [
      { label: 'Camry', value: 'camry' },
      { label: 'Tacoma', value: 'tacoma' },
      { label: 'Tundra', value: 'tundra' },
    ],
  },
];

const styles = {
  wrapper: {
    display: 'flex',
    padding: '1rem',
    margin: '0 auto',
    width: '80%',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  formGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gridGap: '20px',
    marginBottom: '15px',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '15px',
  },
  label: {
    display: 'block',
    fontSize: '0.9em',
    marginBottom: '0.3em',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
    lineHeight: '1.2',
    marginBottom: '0.6em',
    padding: '0.6em',
    width: '100%',
  },
  code: {
    backgroundColor: '#fafafa',
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  gif: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const notes = {
  notes: {
    markdown: `
      # NestedDropdownMenu
      ## Props
      | prop name   | prop type | required | default value | description |
      | ----------- | --------- | -------- | ------------- | ----------- |
      | inline      | Boolean   | false    | false         | Wether to make the loader full screen or inline with the page |
      | message     | String    | false    | 'Loading...'  | Message to be read by screen readers, is not visible on screen |
    `,
  },
};

class BasicNestedDropdown extends React.Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleItemClick = (item) => {
    console.log('Clicked...', item);
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <NestedDropdownMenu
          isOpen={this.state.isOpen}
          onClose={this.toggleDropdown}
          items={CARS}
          onItemClick={this.handleItemClick}
        >
          <button onClick={this.toggleDropdown}>Open Dropdown</button>
        </NestedDropdownMenu>
      </div>
    );
  }
}

storiesOf('NestedDropdownMenu', module).add(
  'default',
  () => <BasicNestedDropdown />,
  notes,
);
