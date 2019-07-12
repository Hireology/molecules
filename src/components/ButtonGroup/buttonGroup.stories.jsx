/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import ButtonGroup from './ButtonGroup';

const sizeTypes = "'small', 'medium', or 'full'";
const alignTypes = "'left', 'right', 'center', or 'justified'";

const notes = {
  notes: {
    markdown: `
      #ButtonGroup
      ## Props
      | prop name         | prop type    | required | default value | description |
      | -----------       | ---------    | -------- | ------------- | ----------- |
      | extraClassNames   | String       | false    | ""            | Additional classes to add component specific styling|
      | children          | Node         | true     | -             | Content to be displayed inside button group |
      | size              | ${sizeTypes} | false    | null          | Size of button group |
      | align             | ${alignTypes}| false    | null          | How to align buttons |
    `,
  },
};

storiesOf('ButtonGroup', module)
  .add(
    'align',
    () => (
      <div>
        <div
          style={{
            marginBottom: 40,
          }}
        >
          <ButtonGroup align="left">
            <Button type="outline">Aligned</Button>
            <Button type="primary">Left</Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            marginBottom: 40,
          }}
        >
          <ButtonGroup align="right">
            <Button type="outline">Aligned</Button>
            <Button type="primary">Right</Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            marginBottom: 40,
          }}
        >
          <ButtonGroup align="center">
            <Button type="outline">Aligned</Button>
            <Button type="primary">Center</Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            marginBottom: 40,
          }}
        >
          <ButtonGroup align="justified">
            <Button type="outline">Aligned</Button>
            <Button type="primary">Justified</Button>
          </ButtonGroup>
        </div>
      </div>
    ),
    notes,
  )
  .add(
    'size',
    () => (
      <div>
        Small
        <div style={{ marginBottom: 20, padding: '20px 0px' }}>
          <ButtonGroup size="small">
            <Button type="outline">Cancel</Button>
            <Button type="primary">Save</Button>
          </ButtonGroup>
        </div>
        Medium
        <div style={{ marginBottom: 20, padding: '20px 0px' }}>
          <ButtonGroup size="medium">
            <Button type="outline">Cancel</Button>
            <Button type="primary">Save</Button>
          </ButtonGroup>
        </div>
        Full
        <div style={{ marginBottom: 20, padding: '20px 0px' }}>
          <ButtonGroup size="full">
            <Button type="outline">Cancel</Button>
            <Button type="primary">Save</Button>
          </ButtonGroup>
        </div>
      </div>
    ),
    notes,
  );
