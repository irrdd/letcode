/*
 * @Author: 王东旭
 * @Date: 2022-08-16 11:22:06
 * @LastEditTime: 2022-08-16 11:22:07
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/程序员面试金典/13.分割链表.sparc.ts
 *
 */
import { kthToLast2 } from "../../src/程序员面试金典/11.返回倒数第k个节点";

import { SingleLink, ListNode } from "../../src/links/SingleLink";
test("返回倒数第k个节点", () => {
  const temp = new SingleLink([1, 2, 3, 4, 5]);
  let num = kthToLast2(temp.head,2)
  expect(num).toBe(4)
});
