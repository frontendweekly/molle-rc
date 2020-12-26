module.exports = {
  ...require.resolve('@frontendweekly/jest-preset-molle/scripts/jest-common.js'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/**/*.js'],
};
