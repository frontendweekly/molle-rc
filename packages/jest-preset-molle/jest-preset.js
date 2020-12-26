module.exports = {
  ...require('@frontendweekly/jest-preset-molle/scripts/jest-common.js'),
  projects: [
    require.resolve('@frontendweekly/jest-preset-molle/scripts/jest-lint.js'),
    require.resolve('@frontendweekly/jest-preset-molle/scripts/jest-client.js'),
    require.resolve('@frontendweekly/jest-preset-molle/scripts/jest-server.js'),
  ],
};
