import { configure } from '@storybook/react';

var req = require.context(
  '../app/assets/javascripts/react/shared',
  true,
  /\.stories\.jsx$/,
);

configure(() => {
  req.keys().forEach((filename) => req(filename));
}, module);
