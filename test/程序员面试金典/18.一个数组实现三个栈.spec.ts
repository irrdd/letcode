/*
 * @Author: 王东旭
 * @Date: 2022-08-17 21:59:58
 * @LastEditTime: 2022-08-17 22:27:10
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: \letcode\test\程序员面试金典\18.一个数组实现三个栈.spec.ts
 *  
 */

import {  TripleInOne} from "../../src/程序员面试金典/18.一个数组实现三个栈";

const triple = new TripleInOne(3)
describe('模拟栈',()=>{
    test('实例化测试',()=>{
        expect(triple.arr.length).toBe(9)
    })
    test('push',()=>{
        triple.push(2,3)
        expect(triple.arr[3]).toBe(3)
        triple.push(2,6)
        expect(triple.arr[4]).toBe(6)
    })
    test('pop',()=>{
        triple.pop(2)
        expect(triple.arr[4]).toBe(3)
        triple.push(2,6)
        expect(triple.arr[4]).toBe(6)
    })
    test('peek',()=>{
        triple.push(2,3)
        expect(triple.arr[3]).toBe(3)
        triple.push(2,6)
        expect(triple.arr[4]).toBe(6)
    })
    test('isEmpty',()=>{
        triple.push(2,3)
        expect(triple.arr[3]).toBe(3)
        triple.push(2,6)
        expect(triple.arr[4]).toBe(6)
    })
})