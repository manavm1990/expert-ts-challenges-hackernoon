import { describe, expect, test } from 'vitest';
import { getLenOfLongestSubstringWithoutRepeatingChars } from '.';

describe('getLenOfLongestSubstringWithoutRepeatingChars', () => {
  test('Find the length of the longest substring without repeating characters', () => {
    const input = 'abbbcabcdefef';
    const output = 6;

    expect(getLenOfLongestSubstringWithoutRepeatingChars(input)).toBe(output);
  });
});
