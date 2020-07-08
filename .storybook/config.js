import { configure } from '@storybook/react';
import '../src/theme/index.scss';

var req = require.context('../src/components', true, /\.stories\.jsx$/);

configure(() => {
  req.keys().forEach((filename) => req(filename));
}, module);
