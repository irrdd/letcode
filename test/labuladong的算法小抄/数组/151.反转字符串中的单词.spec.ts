import { reverseWords, reverseWords2 } from '@/labuladong的算法小抄/数组/151.反转字符串中的单词'

describe("reverseWords", () => {
    test("test with normal input", () => {
        const input = "the sky is blue";
        const output = "blue is sky the";
        expect(reverseWords(input)).toEqual(output);
    });

    test("test with extra spaces", () => {
        const input = "  hello world!  ";
        const output = "world! hello";
        expect(reverseWords(input)).toEqual(output);
    });

    test("test with multiple spaces between words", () => {
        const input = "a good   example";
        const output = "example good a";
        expect(reverseWords(input)).toEqual(output);
    });

    test("test with single word input", () => {
        const input = "hello";
        const output = "hello";
        expect(reverseWords(input)).toEqual(output);
    });

    test("test with leading and trailing spaces", () => {
        const input = "  hello  ";
        const output = "hello";
        expect(reverseWords(input)).toEqual(output);
    });
});

describe("使用正则表达式", () => {
    test("test with normal input", () => {
        const input = "the sky is blue";
        const output = "blue is sky the";
        expect(reverseWords2(input)).toEqual(output);
    });

    test("test with extra spaces", () => {
        const input = "  hello world!  ";
        const output = "world! hello";
        expect(reverseWords2(input)).toEqual(output);
    });

    test("test with multiple spaces between words", () => {
        const input = "a good   example";
        const output = "example good a";
        expect(reverseWords2(input)).toEqual(output);
    });

    test("test with single word input", () => {
        const input = "hello";
        const output = "hello";
        expect(reverseWords2(input)).toEqual(output);
    });

    test("test with leading and trailing spaces", () => {
        const input = "  hello  ";
        const output = "hello";
        expect(reverseWords2(input)).toEqual(output);
    });
});