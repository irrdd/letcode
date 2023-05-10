import { findAnagrams } from '@/labuladong的算法小抄/数组/438.找到字符串中所有字母异位词'

describe("Problem 438: Find All Anagrams in a String", () => {
    it("Find all anagrams in a string with non-empty s and p", () => {
        const s = "cbaebabacd";
        const p = "abc";
        const output = [0, 6];
        expect(findAnagrams(s, p)).toEqual(output);
    });

    it("Find all anagrams in a string with repeated characters", () => {
        const s = "abab";
        const p = "ab";
        const output = [0, 1, 2];
        expect(findAnagrams(s, p)).toEqual(output);
    });

    it("Find all anagrams in a string with all characters the same", () => {
        const s = "aaaaa";
        const p = "a";
        const output = [0, 1, 2, 3, 4];
        expect(findAnagrams(s, p)).toEqual(output);
    });

    it("Find all anagrams in a string with no matching characters", () => {
        const s = "abcd";
        const p = "efg";
        const output: number[] = [];
        expect(findAnagrams(s, p)).toEqual(output);
    });

    it("Find all anagrams in a string with p longer than s", () => {
        const s = "ab";
        const p = "abc";
        const output: number[] = [];
        expect(findAnagrams(s, p)).toEqual(output);
    });

    it("Find all anagrams in an empty string", () => {
        const s = "";
        const p = "a";
        const output: number[] = [];
        expect(findAnagrams(s, p)).toEqual(output);
    });
});

