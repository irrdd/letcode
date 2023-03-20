import { longestPalindrome } from '@/labuladong的算法小抄/数组/5.最长回文子串'
describe('三指针', () => { 
    test('正常回文字符串', () => { 
        const str = 'wertreyu'
        const res = longestPalindrome(str)
        expect(res).toEqual('ertre')
     })

    test('正常回文字符串,全是回文字符串', () => { 
        const str = 'qwerewq'
        const res = longestPalindrome(str)
        expect(res).toEqual('qwerewq')
     })
    test('有两个结果的回文字符串', () => { 
        const str = 'qwewec'
        const res = longestPalindrome(str)
        expect(res).toEqual('ewe')
     })
    test('只有两个字符的回文字符串', () => { 
        const str = 'ww'
        const res = longestPalindrome(str)
        expect(res).toEqual('ww')
     })
    test('只有两个字符的非回文字符串', () => { 
        const str = 'qw'
        const res = longestPalindrome(str)
        expect(res).toEqual('w')
     })
     test('只有一个字符的字符串', () => { 
        const str = 'w'
        const res = longestPalindrome(str)
        expect(res).toEqual('w')
     })
 })