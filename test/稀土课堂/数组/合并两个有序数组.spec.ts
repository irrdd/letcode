/*
 * @Author: 王东旭
 * @Date: 2022-08-23 11:07:57
 * @LastEditTime: 2022-08-23 17:22:16
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/test/稀土课堂/数组/合并两个有序数组.spec.ts
 *
 */
import { merge ,merge2} from "@/稀土课堂/数组/合并两个有序数组";

describe("双指针", () => {
  test("两数组等长", () => {
    let nums1 = [1, 2, 3, 0, 0, 0],
      m = 3,
      nums2 = [2, 5, 6],
      n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6]);
  });
  test("两数组不等长,nums1更长", () => {
    let nums1 = [1, 2, 3, 9, 0, 0, 0],
      m = 4,
      nums2 = [2, 5, 6],
      n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6, 9]);
  });
  test("两数组不等长,nums2更长", () => {
    let nums1 = [1, 2, 3, 0, 0, 0, 0],
      m = 3,
      nums2 = [2, 4, 5, 6],
      n = 4;
    expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 4, 5, 6]);
  });
  test('边缘条件',()=>{
    let nums1 = [0], m = 0, nums2 = [1], n = 1
    expect(merge(nums1, m, nums2, n)).toEqual([1]);
  })
  test('边缘条件',()=>{
    let nums1 = [2,0], m = 1, nums2 = [1], n = 1
    expect(merge(nums1, m, nums2, n)).toEqual([1,2]);
  })
});

describe("数组排序", () => {
  test("两数组等长", () => {
    let nums1 = [1, 2, 3, 0, 0, 0],
      m = 3,
      nums2 = [2, 5, 6],
      n = 3;
    expect(merge2(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6]);
  });
  test("两数组不等长,nums1更长", () => {
    let nums1 = [1, 2, 3, 9, 0, 0, 0],
      m = 4,
      nums2 = [2, 5, 6],
      n = 3;
    expect(merge2(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6, 9]);
  });
  test("两数组不等长,nums2更长", () => {
    let nums1 = [1, 2, 3, 0, 0, 0, 0],
      m = 3,
      nums2 = [2, 4, 5, 6],
      n = 4;
    expect(merge2(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 4, 5, 6]);
  });
  test('边缘条件',()=>{
    let nums1 = [0], m = 0, nums2 = [1], n = 1
    expect(merge2(nums1, m, nums2, n)).toEqual([1]);
  })
  test('边缘条件',()=>{
    let nums1 = [2,0], m = 1, nums2 = [1], n = 1
    expect(merge2(nums1, m, nums2, n)).toEqual([1,2]);
  })
});
