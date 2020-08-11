module.exports = {

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'config.js'
  ],

  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '.+\\.(css|sass|scss)$': 'jest-transform-stub',
  },

  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },

  transformIgnorePatterns: [
    "<rootDir>/node_modules/", "config.js"
  ],

  testURL: 'http://localhost',

  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',

  verbose: true,
};
