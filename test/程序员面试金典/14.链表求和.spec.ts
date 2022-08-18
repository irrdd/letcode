/*
 * @Author: 王东旭
 * @Date: 2022-08-16 20:33:08
 * @LastEditTime: 2022-08-18 13:24:43
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/程序员面试金典/14.链表求和.spec.ts
 *
 */

import { SingleLink } from "@/links/SingleLink";
import { linkToArray } from "@/util/linkUtil";
import { addTwoNumbers } from "#/14.链表求和";
function run(arr1: number[], arr2: number[], fn = addTwoNumbers): number[] {
  const one = new SingleLink(arr1);
  const two = new SingleLink(arr2);
  const res = fn(one.head, two.head);
  const arr = linkToArray(res) as number[];
  return arr;
}

describe("链表求和", () => {
  test("直接操作链表,无进位", () => {
    expect(run([3,7], [9, 2])).toEqual([2, 0, 1]);
  });
  test("直接操作链表,有进位", () => {
    expect(run([7, 8, 1], [6, 5, 4])).toEqual([3, 4, 6]);
  });
  test("直接操作链表,两数位数不相等", () => {
    expect(run([3, 2, 1, 3], [6, 5, 4])).toEqual([9, 7, 5, 3]);
  });
  test("直接操作链表,最高位产生进位", () => {
    expect(run([3, 2, 1, 3], [6, 5, 4, 9])).toEqual([9, 7, 5, 2, 1]);
  });
  test("直接操作链表,两位数不相等，且最高位产生进位", () => {
    expect(run([3, 2, 9], [6, 5, 4, 9])).toEqual([9, 7, 3, 0, 1]);
  });
});
