module.exports = {
  watchPlugins: ['jest-watch-select-projects'],
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
      displayName: 'client',
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/__client_tests__/**/*.[jt]s?(x)'],
    },
    {
      displayName: 'server',
      testEnvironment: 'jest-environment-node',
      testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
    },
  ],
};
