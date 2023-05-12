import { checkInclusion } from '@/labuladong的算法小抄/数组/567.字符串的排列';

describe('567. Permutation in String', () => {
  test('Example test case', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });

  test('Permutation not in string', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  });

  test('Permutation at beginning of string', () => {
    expect(checkInclusion('abc', 'abcde')).toBe(true);
  });

  test('Permutation at end of string', () => {
    expect(checkInclusion('abc', 'deabc')).toBe(true);
  });

  test('Permutation in middle of string', () => {
    expect(checkInclusion('abc', 'defabcgh')).toBe(true);
  });

  test('Permutation with repeated characters', () => {
    expect(checkInclusion('aab', 'baa')).toBe(true);
  });

  test('Permutation with all repeated characters', () => {
    expect(checkInclusion('aaa', 'aaaa')).toBe(true);
  });

  test('Permutation longer than string', () => {
    expect(checkInclusion('abcdefg', 'abc')).toBe(false);
  });

  test('Empty string', () => {
    expect(checkInclusion('', 'abc')).toBe(false);
  });

  test('Empty permutation', () => {
    expect(checkInclusion('abc', '')).toBe(false);
  });
});
