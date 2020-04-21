/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './Dropdown';

const objectDefinition =
  'Array of objects where each object has the attributes "name" of type string, and "onClick" of type function';

const notes = {
  notes: {
    markdown: `
      #Dropdown
      ## Props
      | prop name       | prop type           | required | default value      | description |
      | --------------- | ------------------- | -------- | ------------------ | ----------- |
      | placeholderText | String              | false    | 'Select an option' | Placeholder to be displayed before an option has been selected |
      | actions         | ${objectDefinition} | false    | []                 | Any actions that should be included in the dropdown, an action will not be shown as selected after it has been clicked, and will always appear first in the dropdown list |
      | options         | ${objectDefinition} | true     | -                  | Any options that should be included in the dropdown, an option will be shown as selected after it has been clicked, and will always appear after any actions in the dropdown list |
    `,
  },
};

const actions = [
  {
    name: (
      <span>
        <i className="fa fa-fw fa-plus" />
        This is an action
      </span>
    ),
    value: 'action',
    // eslint-disable-next-line no-undef
    onClick: () => window.alert('you triggered the action'),
  },
];
const options = [
  { name: 'Regular option 1', value: '1', onClick: () => console.log('1') },
  { name: 'Regular option 2', value: '2', onClick: () => console.log('2') },
  {
    name: 'Regular option 3 but with a really really long title',
    value: '3',
    onClick: () => console.log('3'),
  },
];

storiesOf('Dropdown', module).add(
  'default',
  () => (
    <div style={{ width: 300 }}>
      <Dropdown options={options} actions={actions} />
    </div>
  ),
  notes,
);
