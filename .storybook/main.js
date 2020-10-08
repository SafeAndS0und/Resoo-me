const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "../src/components"
    );
    config.resolve.alias["@context"] = path.resolve(__dirname, "../src/context");
    config.resolve.alias["@common"] = path.resolve(__dirname, "../src/common");
    return config;
  },
};
