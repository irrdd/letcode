import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from "@/labuladong的算法小抄/数组/3.无重复字符的最长子串";

describe("使用map", () => {
  test("example 1", () => {
    const s = "abcabcbb";
    const expected = 3;
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });

  test("example 2", () => {
    const s = "bbbbb";
    const expected = 1;
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });

  test("empty string", () => {
    const s = "";
    const expected = 0;
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });

  test("all repeated characters", () => {
    const s = "aaaaa";
    const expected = 1;
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });

  test("longest substring at the end", () => {
    const s = "pwwkew";
    const expected = 3;
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });

  test("longest substring in the middle", () => {
    const s = "abcabcbbdefgh";
    const expected = 6;
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });
});
describe("滑动窗口", () => {
    test("example 1", () => {
      const s = "abcabcbb";
      const expected = 3;
      expect(lengthOfLongestSubstring2(s)).toBe(expected);
    });
  
    test("example 2", () => {
      const s = "bbbbb";
      const expected = 1;
      expect(lengthOfLongestSubstring2(s)).toBe(expected);
    });
  
    test("empty string", () => {
      const s = "";
      const expected = 0;
      expect(lengthOfLongestSubstring2(s)).toBe(expected);
    });
  
    test("all repeated characters", () => {
      const s = "aaaaa";
      const expected = 1;
      expect(lengthOfLongestSubstring2(s)).toBe(expected);
    });
  
    test("longest substring at the end", () => {
      const s = "pwwkew";
      const expected = 3;
      expect(lengthOfLongestSubstring2(s)).toBe(expected);
    });
  
    test("longest substring in the middle", () => {
      const s = "abcabcbbdefgh";
      const expected = 6;
      expect(lengthOfLongestSubstring2(s)).toBe(expected);
    });
  });
  