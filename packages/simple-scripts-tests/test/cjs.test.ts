import { describe, it, expect } from 'vitest';

// Load the compiled CommonJS module using import
import ss1 from '@mincong-classroom/simple-scripts-cjs';

// Load the compiled CommonJS module using require
const ss2 = require('@mincong-classroom/simple-scripts-cjs');

describe('CommonJS Module Behavior', () => {
  it('should support "import"', () => {
    expect(ss1).toBeDefined();
    expect(ss1.greet('World')).toBe('Hello, World!');
  });

  it('should support "require"', () => {
    expect(ss2.greet).toBeDefined();
    expect(ss2.greet('World')).toBe('Hello, World!');
  });
});
