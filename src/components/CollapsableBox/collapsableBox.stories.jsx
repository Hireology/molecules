import React from 'react';
import { storiesOf } from '@storybook/react';
import CollapsableBox from './CollapsableBox';

const notes = {
  notes: {
    markdown: `
      #Collapsable Box
      ## Props
      | prop name            | prop type              | required | default value | description |
      | -------------------- | ---------------------- | -------- | ------------- | ----------- |
      | children             | Node or array of nodes | true     | -             | Content to be displayed in body of box |
      | defaultExpanded      | Boolean                | false    | true          | Wether the box should initially be expanded or collapsed |
      | nonScrollableContent | Node or array of nodes | false    | null          | Any content that should not scroll inside a scrollable box |
      | title                | String                 | true     | -             | Title of box |
      | scrollable           | Boolean                | false    | false         | Wether or not the body of the box should be scrollable after 200px |
    `,
  },
};

storiesOf('CollapsableBox', module).add(
  'default',
  () => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '300px', display: 'inline-block' }}>
          <CollapsableBox title="Default Box">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </CollapsableBox>
        </div>
        <div style={{ width: '300px', display: 'inline-block' }}>
          <CollapsableBox
            title="Initially Collapsed Box"
            defaultExpanded={false}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </CollapsableBox>
        </div>
        <div style={{ width: '300px', display: 'inline-block' }}>
          <CollapsableBox title="Scrollable Box" scrollable>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </CollapsableBox>
        </div>
        <div style={{ width: '300px', display: 'inline-block' }}>
          <CollapsableBox
            title="Partially Scrollable Box"
            scrollable
            nonScrollableContent={
              <div style={{ paddingBottom: 10 }}>
                This text will not scroll, but the text below it will.
              </div>
            }
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </CollapsableBox>
        </div>
      </div>
    );
  },
  notes,
);
