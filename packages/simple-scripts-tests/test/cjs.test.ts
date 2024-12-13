import { describe, it, expect } from 'vitest';

// Load the compiled CommonJS module using require
const ss = require('@mincong-classroom/simple-scripts-cjs');

describe('CommonJS Module Behavior', () => {
  it('should export the named export correctly', () => {
    expect(ss.greet).toBeDefined();
    expect(ss.greet('World')).toBe('Hello, World!');
  });
});
