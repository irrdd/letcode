/*
 * @Author: 王东旭
 * @Date: 2022-09-13 20:42:03
 * @LastEditTime: 2022-09-13 21:31:00
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: \letcode\test\稀土课堂\链表\有序链表合并.spec.ts
 *
 */

import { mergeTwoLists } from "@/稀土课堂/链表/有序链表合并";
import { ListNode, SingleLink } from "@/links/SingleLink";
import { linkToArray } from "@/util/linkUtil";

describe("顺序遍历法", () => {
  test("等长两顺序链表合并", () => {
    const link1 = new SingleLink([1, 3, 5, 7]);
    const link2 = new SingleLink([2, 4, 6, 8]);
    const link3 = mergeTwoLists(link1.head, link2.head);
    expect(linkToArray(link3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

   test("非等长两顺序链表合并", () => {
    const link1 = new SingleLink([1, 3, 5, 7]);
    const link2 = new SingleLink([2, 3, 6]);
    const link3 = mergeTwoLists(link1.head, link2.head);
    expect(linkToArray(link3)).toEqual([1, 2, 3, 3, 5, 6, 7]);
   })
   test("一方是空的顺序链表合并", () => {
    const link1 = new SingleLink([1, 3, 5, 7]);
    const link2 = null 
    const link3 = mergeTwoLists(link1.head, link2);
    expect(linkToArray(link3)).toEqual([1, 3, 5, 7]);
   })
   test("两个都是空的链表合并", () => {
    const link1 = null 
    const link2 = null 
    const link3 = mergeTwoLists(link1, link2);
    expect(link3).toBeNull()
   })
});
