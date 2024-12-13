import { describe, it, expect } from 'vitest';

// Load the compiled CommonJS module using require
const cjsModule = require('simple-scripts-cjs');

describe('CommonJS Module Behavior', () => {
  it('should export the named export correctly', () => {
    expect(cjsModule.greet).toBeDefined();
    expect(cjsModule.greet('World')).toBe('Hello, World!');
  });
});