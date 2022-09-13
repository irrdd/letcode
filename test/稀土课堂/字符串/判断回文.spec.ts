/*
 * @Author: 王东旭
 * @Date: 2022-09-01 20:27:35
 * @LastEditTime: 2022-09-01 20:50:52
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: \letcode\test\稀土课堂\字符串\判断回文.spec.ts
 *  
 */

import { isRever  } from "@/稀土课堂/字符串/判断回文";

describe('对称法',()=>{
    test('正常回文',()=>{
        const str = 'abcdcba'
        const res = isRever(str)
        expect(res).toBeTruthy()
    })
    test('删左半边一个字符回文',()=>{
        const str = 'aebcdcba'
        const res = isRever(str)
        expect(res).toBeTruthy()
    })
    test('删右半边一个字符回文',()=>{
        const str = 'abcdceba'
        const res = isRever(str)
        expect(res).toBeTruthy()
    })
    test('单个字母',()=>{
        const str = 'a'
        const res = isRever(str)
        expect(res).toBeTruthy()
    })
    test('不回文',()=>{
        const str = 'adfjaf'
        const res = isRever(str)
        expect(res).toBeFalsy()
    })
    test('删两个回文',()=>{
        const str = 'abfgcdcba'
        const res = isRever(str)
        expect(res).toBeFalsy()
    })
})