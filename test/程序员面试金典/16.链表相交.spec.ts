/*
 * @Author: 王东旭
 * @Date: 2022-08-17 10:47:14
 * @LastEditTime: 2022-08-18 13:25:23
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/程序员面试金典/16.链表相交.spec.ts
 *
 */

import { getIntersectionNode,getIntersectionNode2 } from "#/16.链表相交";
import { linkInArray  } from "@/util/linkUtil";
describe("借用Set进行辅助", () => {

  test("两链表等长，且相交", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const b = linkInArray([2, 3, 4]);
    b[2].next = a[2].next;
    const link = getIntersectionNode(a[0], b[0]);
    expect(link).toBe(a[3]);
  })
  test("两链表不等长，且相交", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const b = linkInArray([2, 4]);
    b[1].next = a[2].next;
    const link = getIntersectionNode(a[0], b[0]);
    expect(link).toBe(a[3]);
  })

  test("两链表不等长，不相交", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const b = linkInArray([2, 4,5,6]);
    const link = getIntersectionNode(a[0], b[0]);
    expect(link).toBeNull()
  });
});


describe("双指针", () => {

  test("两链表等长，且相交", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const b = linkInArray([2, 3, 4]);
    b[2].next = a[2].next;
    const link = getIntersectionNode2(a[0], b[0]);
    expect(link).toBe(a[3]);
  })
  test("两链表不等长，且相交", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const b = linkInArray([2, 4]);
    b[1].next = a[2].next;
    const link = getIntersectionNode2(a[0], b[0]);
    expect(link).toBe(a[3]);
  })

  test("两链表不等长，不相交", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const b = linkInArray([2, 4,5,6]);
    const link = getIntersectionNode2(a[0], b[0]);
    expect(link).toBeNull()
  });
});
