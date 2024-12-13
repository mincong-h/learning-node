import { greet } from '@mincong-classroom/simple-scripts-esm';
import { describe, expect, it } from 'vitest';

describe('CommonJS Module Behavior', () => {
  it('should export the named export correctly', () => {
    expect(greet).toBeDefined();
    expect(greet('World')).toBe('Hello, World!');
  });
});
