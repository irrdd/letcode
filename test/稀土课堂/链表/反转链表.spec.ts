/*
 * @Author: 王东旭
 * @Date: 2022-09-14 21:38:48
 * @LastEditTime: 2022-09-14 23:08:08
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: \letcode\test\稀土课堂\链表\反转链表.spec.ts
 *  
 */

import { ListNode, SingleLink } from "@/基本数据结构/SingleLink";
import { linkToArray } from "@/util/linkUtil";
import { reverseList  } from '@/稀土课堂/链表/反转链表';

describe("多指针", () => {

    test('正常链表反转',() => {
        const link = new SingleLink([1,2,3,4,5])
        const res = reverseList(link.head)
        const arr = linkToArray(res)
        expect(arr).toEqual([5,4,3,2,1])
    })
        test('单节点链表反转',() => {
        const link = new SingleLink([1])
        const res = reverseList(link.head)
        const arr = linkToArray(res)
        expect(arr).toEqual([1])
    })
        test('空链表反转',() => {
        const link = null
        const res = reverseList(link)
        expect(res).toBeNull()
    })
});