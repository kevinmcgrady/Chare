// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@atomic': '<rootDir>/src/atomic/index',
    '@hooks': '<rootDir>/src/hooks/index',
    '@urls': '<rootDir>/src/urls/index',
    '@services/(.*)': '<rootDir>/src/services/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
