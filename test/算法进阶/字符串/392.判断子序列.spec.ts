import { isSubsequence } from "~/字符串/392.判断子序列";

describe('字符较短的方案', () => { 
    test('子字符串的长度是0', () => { 
        const res = isSubsequence('','xxxx')
        expect(res).toBeTruthy()
     })

    test('字符串的长度是0', () => { 
        const res = isSubsequence('dfdl','')
        expect(res).toBeFalsy()
     })
    test('子字符串全部字符都在父字符串中，但是顺序不同', () => { 
        const res = isSubsequence('dsc','abcdefjs')
        expect(res).toBeFalsy()
     })
    test('子字符串全部字符都在父字符串中,顺序相同', () => { 
        const res = isSubsequence('cdf','abcdfg')
        expect(res).toBeTruthy()
     })
    test('子字符串有字符不在父字符串中,顺序相同', () => { 
        const res = isSubsequence('cdfs','abcdfg')
        expect(res).toBeFalsy()
     })
     
    test('子字符串有字符不在父字符串中,顺序不相同', () => { 
        const res = isSubsequence('cfds','abcdfg')
        expect(res).toBeFalsy()
     })
 })