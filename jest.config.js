module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // or 'jsdom' for browser-like environments
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/?(*.)+(spec|test).(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Use your project's tsconfig
    },
  },
  modulePathIgnorePatterns: ['dist'],
}
