/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

const types = "'secondary', 'warning', 'danger'";

const notes = {
  notes: {
    markdown: `
      # Link
      ## Props
      | prop name         | prop type | required | default value | description |
      | -----------       | --------- | -------- | ------------- | ----------- |
      | additionalClasses | String    | false    | null          | Additional classes to add component specific styling|
      | children          | Node      | true     | -             | Content to be displayed inside Link |
      | disabled          | Boolean   | false    | false         | Wether button should be disabled or not |
      | id                | String    | false    | null          | Link id |
      | onClick           | Function  | false    | null          | Function to call for link click handler |
      | type              | ${types}  | false    | null          | Type of link |
    `,
  },
};

storiesOf('Link', module)
  .add(
    'types',
    () => (
      <div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link>Default Link</Link>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link type="secondary">Secondary Link</Link>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link type="warning">Warning Link</Link>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link type="danger">Danger Link</Link>
        </div>
      </div>
    ),
    notes,
  )
  .add(
    'disabled',
    () => (
      <div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link disabled>Default Link</Link>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link type="secondary" disabled>
            Secondary Link
          </Link>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link type="warning" disabled>
            Warning Link
          </Link>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Link type="danger" disabled>
            Danger Link
          </Link>
        </div>
      </div>
    ),
    notes,
  );
