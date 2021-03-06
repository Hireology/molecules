import React from 'react';
import { storiesOf } from '@storybook/react';
import Drawer from './Drawer';

/*
title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onExitClick: PropTypes.func.isRequired,
*/
const notes = {
  notes: {
    markdown: `
      #Drawer
      ## Props
      | prop name       | prop type     | required | default value      | description |
      | --------------- | ------------- | -------- | ------------------ | ----------- |
      | title           | String        | true     | -                  | Drawer title |
      | isOpen          | Boolean       | true     | -                  | Whether the drawer is open or not |
      | children        | Node          | true     | -                  | Drawer content |
      | onExitClick     | Function      | true     | -                  | Handling the click of the close button |
      | hideForDesktop  | Boolean       | false    | true               | Whether the drawer should be automatically hidden for screens larger than 1024px  |
    `,
  },
};

storiesOf('Drawer', module).add(
  'default',
  () => (
    <div>
      Lorem ipsum dolor sit amet, dicunt singulis per eu, cum eu iuvaret feugiat
      menandri, agam ferri ut sit. Mundi honestatis per at. Ea per causae
      imperdiet, ex probo dicam repudiare ius. Stet doctus ne eos. Ea nam magna
      fugit. In abhorreant consectetuer nam, feugiat conceptam reprehendunt qui
      at, ei vis dolore diceret. <br />
      <br />
      Saperet apeirian nec ad, nam partem tritani cotidieque te. At eos lucilius
      constituam, timeam alienum denique duo cu. Sumo postea vis eu. Dicant
      perpetua no ius, sale indoctum ius te, nonumy timeam neglegentur sed an.
      Eu altera doming vel, eu eam semper democritum, vis ea populo albucius.
      <Drawer
        title="Test Drawer"
        isOpen
        onExitClick={() => null}
        hideForDesktop={false}
      >
        <div>
          Lorem ipsum dolor sit amet, dicunt singulis per eu, cum eu iuvaret
          feugiat menandri, agam ferri ut sit. Mundi honestatis per at. Ea per
          causae imperdiet, ex probo dicam repudiare ius. Stet doctus ne eos. Ea
          nam magna fugit. In abhorreant consectetuer nam, feugiat conceptam
          reprehendunt qui at, ei vis dolore diceret. <br />
          <br />
          Saperet apeirian nec ad, nam partem tritani cotidieque te. At eos
          lucilius constituam, timeam alienum denique duo cu. Sumo postea vis
          eu. Dicant perpetua no ius, sale indoctum ius te, nonumy timeam
          neglegentur sed an. Eu altera doming vel, eu eam semper democritum,
          vis ea populo albucius.
        </div>
      </Drawer>
    </div>
  ),
  notes,
);
