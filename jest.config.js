const path = require('path');

module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: require.resolve(
    path.join(__dirname, 'jest.setup.js'),
  ),
  // ... other options ...
};
