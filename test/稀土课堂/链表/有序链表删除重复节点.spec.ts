/*
 * @Author: 王东旭
 * @Date: 2022-09-13 21:44:09
 * @LastEditTime: 2022-09-13 21:50:25
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: \letcode\test\稀土课堂\链表\有序链表删除重复节点.spec.ts
 *
 */

import { ListNode, SingleLink } from "@/links/SingleLink";
import { linkToArray } from "@/util/linkUtil";
import { uniqtLink } from "@/稀土课堂/链表/有序链表删除重复节点";

describe("遍历链表", () => {
  test("普通重复链表", () => {
    const link = new SingleLink([1, 1, 2, 3, 5, 5]);
    const res = uniqtLink(link.head);
    expect(linkToArray(res)).toEqual([1, 2, 3, 5]);
  });
  test("不重复链表", () => {
    const link = new SingleLink([1, 2, 3, 5]);
    const res = uniqtLink(link.head);
    expect(linkToArray(res)).toEqual([1, 2, 3, 5]);
  });
  test("空链表", () => {
    const link = null
    const res = uniqtLink(link);
    expect(res).toBeNull()
  });
});
