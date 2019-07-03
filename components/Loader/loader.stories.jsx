/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './Loader';

const notes = {
  notes: {
    markdown: `
      #Loader
      ## Props
      | prop name   | prop type | required | default value | description |
      | ----------- | --------- | -------- | ------------- | ----------- |
      | inline      | Boolean   | false    | false         | Wether to make the loader full screen or inline with the page |
      | message     | String    | false    | 'Loading...'  | Message to be read by screen readers, is not visible on screen |
    `,
  },
};

storiesOf('Loader', module)
  .add(
    'default',
    () => (
      <div>
        <div>Page content is grayed out while we load</div>
        <Loader />
      </div>
    ),
    notes,
  )
  .add(
    'inline',
    () => (
      <div style={{ width: '50%', border: '1px solid black', padding: 20 }}>
        <div>Loader is inline with page content</div>
        <Loader inline />
      </div>
    ),
    notes,
  );
