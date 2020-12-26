const path = require('path');

module.exports = {
  watchPlugins: ['jest-watch-select-projects'],
  setupFiles: ['jest-date-mock', require.resolve('@frontendweekly/jest-preset-molle/scripts/jest-setup.js')],
};
