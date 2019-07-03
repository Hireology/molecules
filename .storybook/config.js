import { configure } from "@storybook/react";

var req = require.context("../components", true, /\.stories\.jsx$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
