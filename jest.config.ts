// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',                  // Use ts-jest preset for TypeScript
  testEnvironment: 'node',            // Use Node.js environment for testing
  transform: {
    '^.+\\.tsx?$': 'ts-jest',         // Transform .ts and .tsx files using ts-jest
  },
};

export default config;