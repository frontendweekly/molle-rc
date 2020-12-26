module.exports = {
  require('@frontendweekly/jest-preset-molle/scripts/jest-common.js'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__client_tests__/**/*.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
