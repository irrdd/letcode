/*
 * @Author: 王东旭
 * @Date: 2022-08-16 11:22:06
 * @LastEditTime: 2022-08-16 13:55:11
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/程序员面试金典/11.返回倒数第k个节点.spec.ts
 *
 */
import {
  kthToLast2,
  kthToLast,
} from "../../src/程序员面试金典/11.返回倒数第k个节点";

import { SingleLink } from "../../src/links/SingleLink";
describe("返回倒数第k个节点", () => {
  test("借助数组", () => {
    const temp = new SingleLink([1, 2, 3, 4, 5]);
    let num = kthToLast(temp.head, 2);
    expect(num).toBe(4);
  });
  test("快慢指针法", () => {
    const temp = new SingleLink([1, 2, 3, 4, 5]);
    let num = kthToLast2(temp.head, 2);
    expect(num).toBe(4);
  });
});
