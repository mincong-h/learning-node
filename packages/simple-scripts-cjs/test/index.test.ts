import { describe, it, expect } from 'vitest';

// Load the compiled CommonJS module using require
const cjsModule = require('../dist/index.js');

describe('CommonJS Module Behavior', () => {
  it('should export the named export correctly', () => {
    expect(cjsModule.greet).toBeDefined();
    expect(cjsModule.greet('World')).toBe('Hello, World!');
  });

  it('should export the default export correctly', () => {
    expect(cjsModule.default).toBeDefined();
    expect(cjsModule.default('World')).toBe('Hello, World!');
  });
});