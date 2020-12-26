module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__client_tests__/**/*.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
