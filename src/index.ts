export const getLenOfLongestSubstringWithoutRepeatingChars = (
  str: string,
): number => {
  let longest = 0;
  let current = 0;

  const sub = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (sub.has(char)) {
      current = 0;
      sub.clear();
    }

    sub.add(char);
    current++;
    longest = Math.max(longest, current);
  }

  return longest;
};
