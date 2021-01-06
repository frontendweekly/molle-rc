module.exports = {
  ...require.resolve('@frontendweekly/jest-preset-molle/jest-common.js'),
  projects: [
    {
      displayName: 'eslint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/*.[jt]s?(x)'],
    },
    {
      displayName: 'stylelint',
      runner: 'jest-runner-stylelint',
      testMatch: ['<rootDir>/**/*.(?:p?c|sa)ss'],
    },
    {
      ...require.resolve('@frontendweekly/jest-preset-molle/jest-common.js'),
      displayName: 'client',
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/__client_tests__/**/*.[jt]s?(x)'],
    },
    {
      ...require.resolve('@frontendweekly/jest-preset-molle/jest-common.js'),
      displayName: 'server',
      testEnvironment: 'jest-environment-node',
      testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
    },
  ],
};
