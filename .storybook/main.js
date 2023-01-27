module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  docs: {
    autodocs: true,
  },
  addons: ["storybook-tailwind-dark-mode"],
};
