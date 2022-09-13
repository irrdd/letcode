/*
 * @Author: 王东旭
 * @Date: 2022-09-13 22:40:06
 * @LastEditTime: 2022-09-13 23:06:06
 * @LastEditors: 王东旭
 * @Description: 示例 1:
 *输入: 1->2->3->3->4->4->5
 *输出: 1->2->5
 *示例 2:
 *输入: 1->1->1->2->3
 *输出: 2->3
 * @FilePath: \letcode\test\稀土课堂\链表\排序链表删除所有重复节点.spec.ts
 *
 */

import { ListNode, SingleLink } from "@/links/SingleLink";
import { linkToArray } from "@/util/linkUtil";
import { unqit  } from '@/稀土课堂/链表/排序链表删除所有重复节点';

describe('使用map',() => {
   test('普通有重复节点链表',() => {
     const link = new SingleLink([1,2,3,3,5,6,6])
     const res = unqit(link.head)
     expect(linkToArray(res)).toEqual([1,2,5])
   }) 
})
