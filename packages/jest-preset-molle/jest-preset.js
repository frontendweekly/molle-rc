module.exports = {
  ...require('./scripts/jest-common.js'),
  projects: [
    './scripts/jest-lint.js',
    './scripts/jest-client.js',
    './scripts/jest-server.js',
  ],
};
