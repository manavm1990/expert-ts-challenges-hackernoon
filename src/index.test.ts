import { it, describe, expect, test } from 'vitest';
import {
  getLenOfLongestSubstringWithoutRepeatingChars,
  restructureArrayNumsFirstLettersSecond,
} from '.';

describe('getLenOfLongestSubstringWithoutRepeatingChars', () => {
  test('Find the length of the longest substring without repeating characters', () => {
    const input = 'abbbcabcdefef';
    const output = 6;

    expect(getLenOfLongestSubstringWithoutRepeatingChars(input)).toBe(output);
  });

  it('should return 0 for empty string', () => {
    const input = '';
    const output = 0;

    expect(getLenOfLongestSubstringWithoutRepeatingChars(input)).toBe(output);
  });
});

describe('restructureArrayNumsFirstLettersSecond', () => {
  it('should restructure the array', () => {
    const input = [2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1];
    const output = [2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e'];

    expect(restructureArrayNumsFirstLettersSecond(input)).toEqual(output);
  });
});
