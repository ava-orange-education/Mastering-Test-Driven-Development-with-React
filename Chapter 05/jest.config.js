module.exports = {
  testEnvironment: 'jsdom', // Simulates a browser environment for testing
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Optional: Custom setup file for Jest
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx}'], // Match test files
};