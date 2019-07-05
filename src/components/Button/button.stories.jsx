import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const sizeTypes = "'small', 'medium', or 'full'";
const typeTypes =
  "'danger', 'gray', 'outline', 'outlineWhite', 'primary', 'secondary', or 'unselected'";

const notes = {
  notes: {
    markdown: `
      #Button
      ## Props
      | prop name         | prop type    | required | default value | description |
      | -----------       | ---------    | -------- | ------------- | ----------- |
      | additionalClasses | String       | false    | ""            | Additional classes to add component specific styling|
      | children          | Node         | true     | -             | Content to be displayed inside button |
      | disabled          | Bool         | false    | false         | Whether or not button should be disabled |
      | id                | String       | false    | ""            | Button id |
      | onClick           | Function     | false    | null          | onClick function passed to button |
      | onMouseOut        | Function     | false    | null          | onMouseOut function passed to button |
      | onMouseOver       | Function     | false    | null          | onMouseOver function passed to button |
      | onMouseDown       | Function     | false    | null          | onMouseDown function passed to button |
      | size              | ${sizeTypes} | false    | 'medium'      | Size of button |
      | type              | ${typeTypes} | false    | null          | Type of button |
    `,
  },
};

storiesOf('Button', module)
  .add(
    'types',
    () => (
      <div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="primary">Primary</Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="secondary">Secondary</Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="danger">Danger</Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="gray">Gray</Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="unselected">Unselected</Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="outline">Outline</Button>
        </div>
        <div
          style={{
            padding: '5px 20px',
            width: 140,
            display: 'block',
            backgroundColor: '#2a5769',
          }}
        >
          <Button type="outlineWhite">White Outline</Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button>No Type Defined</Button>
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
          <Button type="danger" disabled>
            Danger
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="gray" disabled>
            Gray
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="outline" disabled>
            Outline
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="outlineWhite" disabled>
            White Outline
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="primary" disabled>
            Primary
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="secondary" disabled>
            Secondary
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="unselected" disabled>
            Unselected
          </Button>
        </div>
      </div>
    ),
    notes,
  )
  .add(
    'size',
    () => (
      <div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="primary" size="small">
            Small
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="primary" size="medium">
            Medium
          </Button>
        </div>
        <div style={{ padding: '5px 20px', display: 'block' }}>
          <Button type="primary" size="full">
            Full
          </Button>
        </div>
      </div>
    ),
    notes,
  );
