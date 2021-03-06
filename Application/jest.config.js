module.exports = {
  setupTestFrameworkScriptFile: './jest.framework-setup.js',
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  reporters: ['default', 'jest-junit'],
  testResultsProcessor: 'jest-junit'
};
