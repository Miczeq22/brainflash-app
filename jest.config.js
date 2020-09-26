module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      diagnostics: true,
    },
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@context/(.*)': '<rootDir>/src/context/$1',
    '@graphql/(.*)': '<rootDir>/src/graphql/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@providers/(.*)': '<rootDir>/src/providers/$1',
    '@theme/(.*)': '<rootDir>/src/theme/$1',
    '@ui/(.*)': '<rootDir>/src/ui/$1',
  },
};
