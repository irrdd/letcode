/*
 * @Author: 王东旭
 * @Date: 2022-08-16 13:57:26
 * @LastEditTime: 2022-08-18 13:21:39
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/程序员面试金典/13.分割链表.spec.ts
 *
 */
import {
  partition,
  partition2,
  partition3,
} from "@/程序员面试金典/13.分割链表";
import { SingleLink } from "@/links/SingleLink";
import { linkToArray } from "@/util/linkUtil";

function getArray(arr: number[], k: number, fn = partition) {
  const temp = new SingleLink(arr);
  const link = fn(temp.head, k);
  return linkToArray(link);
}
describe("分割链表", () => {
  test("借助两个数组完成", () => {
    const arr = getArray([1, 6, 4, 3, 7, 9], 5);
    expect(arr).toEqual([1, 4, 3, 6, 7, 9]);
    const arr2 = getArray([1, 4, 3, 2, 5, 2], 3);
    expect(arr2).toEqual([1, 2, 2, 4, 3, 5]);
  });
  test("借助两个数组完成，边界情况", () => {
    const arr = getArray([2, 3, 5, 6], 1);
    expect(arr).toEqual([2, 3, 5, 6]);
    const arr1 = getArray([2, 3, 5, 6], 7);
    expect(arr1).toEqual([2, 3, 5, 6]);
    const arr2 = getArray([1, 2, 3], 2);
    expect(arr2).toEqual([1, 2, 3]);
  });
  test("借助单数组", () => {
    const arr = getArray([1, 4, 3, 2, 5, 2], 3, partition2);
    expect(arr).toEqual([1, 2, 2, 4, 3, 5]);
    const arr2 = getArray([2, 1], 2, partition2);
    expect(arr2).toEqual([1, 2]);
  });
  test("借助两个链表", () => {
    const arr = getArray([1, 4, 3, 2, 5, 2], 3, partition3);
    expect(arr).toEqual([1, 2, 2, 4, 3, 5]);
    const arr2 = getArray([2, 1], 2, partition3);
    expect(arr2).toEqual([1, 2]);
  });
});
