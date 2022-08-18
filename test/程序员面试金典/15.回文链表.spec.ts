/*
 * @Author: 王东旭
 * @Date: 2022-08-17 09:48:27
 * @LastEditTime: 2022-08-18 13:24:52
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: /letcode/test/程序员面试金典/15.回文链表.spec.ts
 *  
 */

import { SingleLink, ListNode } from "@/links/SingleLink";
import {  isPalindrome} from "#/15.回文链表";

function base(arr:number[],fn=isPalindrome):boolean{
    const temp = new SingleLink(arr)
    const res = fn(temp.head)
    return res 
}


describe('判断是否是回文链表',()=>{
    test('正常情况，是奇数回文链表',()=>{
        expect(base([1,2,3,2,1])).toBeTruthy()
    })
    test('正常情况，是偶数回文链表',()=>{
        expect(base([1,2,2,1])).toBeTruthy()
    })
    test('非回文链表',()=>{
        expect(base([1,2,3,3,1])).toBeFalsy()
    })
    test('空链表',()=>{
        expect(base([])).toBeTruthy()
    })
})
