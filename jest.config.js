// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@atomic': '<rootDir>/src/atomic/index',
    '@hooks': '<rootDir>/src/hooks/index',
    '@urls': '<rootDir>/src/urls/index',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@modules/(.*)': '<rootDir>/src/modules/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
