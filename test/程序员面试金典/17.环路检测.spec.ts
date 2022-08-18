/*
 * @Author: 王东旭
 * @Date: 2022-08-17 14:28:55
 * @LastEditTime: 2022-08-18 13:25:50
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/程序员面试金典/17.环路检测.spec.ts
 *
 */

import { detectCycle } from "#/17.环路检测";
import { linkInArray  } from "@/util/linkUtil";

describe("用Set辅助", () => {

  test("有环路", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    a[a.length - 1].next = a[1];
    const link = detectCycle(a[0]);
    expect(link).toBe(a[1]);
  });

  test("无环路", () => {
    const a = linkInArray([1, 2, 3, 4, 5]);
    const link = detectCycle(a[0]);
    expect(link).toBeNull();
  });
  test("全环路", () => {
    const a = linkInArray([1, 2]);
    a[1].next = a[0]
    const link = detectCycle(a[0]);
    expect(link).toBe(a[0])
  });
  test("只有一个节点", () => {
    const a = linkInArray([1]);
    const link = detectCycle(a[0]);
    expect(link).toBeNull();
  });
});
