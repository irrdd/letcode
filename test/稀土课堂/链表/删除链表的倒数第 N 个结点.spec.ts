/*
 * @Author: 王东旭
 * @Date: 2022-09-14 20:44:13
 * @LastEditTime: 2022-09-14 21:40:53
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: \letcode\test\稀土课堂\链表\删除链表的倒数第 N 个结点.spec.ts
 *
 */

import { ListNode, SingleLink } from "@/links/SingleLink";
import { linkToArray } from "@/util/linkUtil";
import { removeNthFromEnd } from "@/稀土课堂/链表/删除链表的倒数第 N 个结点";

describe("借助数组", () => {
  test("正常删除", () => {
    const link = new SingleLink([1, 2, 3, 4, 5]);
    const res = removeNthFromEnd(link.head, 2);
    const arr = linkToArray(res);
    expect(arr).toEqual([1, 2, 3, 5]);
  });
  test("只有一个节点", () => {
    const link = new SingleLink([1]);
    const res = removeNthFromEnd(link.head, 1);
    expect(res).toBeNull();
  });
  test("空节点", () => {
    const link = null 
    const res = removeNthFromEnd(link, 1);
    expect(res).toBeNull()
  });
  test("删除头节点", () => {
    const link = new SingleLink([1, 2, 3, 4, 5]);
    const res = removeNthFromEnd(link.head, 5);
    const arr = linkToArray(res);
    expect(arr).toEqual([ 2, 3, 4, 5]);
  });  
  test("删除尾节点", () => {
        const link = new SingleLink([1, 2, 3, 4, 5]);
    const res = removeNthFromEnd(link.head, 1);
    const arr = linkToArray(res);
    expect(arr).toEqual([1, 2, 3, 4 ]);
  });
});
