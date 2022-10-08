export const getLenOfLongestSubstringWithoutRepeatingChars = (
  str: string,
): number => {
  // If the string is empty, return 0
  if (str.length === 0) {
    return 0;
  }

  // Start building a substring from the first character until we duplicate a character
  return str
    .split('')
    .reduce(
      (acc, char, index, origin) => {
        const lastI = acc.length - 1;

        // Either append to the last string in 'acc' or start a new one (if duplicate char)
        const lastString = acc[lastI];

        if (lastString.includes(char)) {
          // Append a new string that goes back to the last occurrence of the duplicate char (+ 1)
          return [...acc, str.slice(str.lastIndexOf(char, index - 1), index)];
        }

        acc[lastI] = lastString + char;
        return acc;
      },
      [''],
    )
    .sort((a, b) => b.length - a.length)[0].length;
};
