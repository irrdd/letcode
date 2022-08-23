/*
 * @Author: 王东旭
 * @Date: 2022-08-23 11:07:45
 * @LastEditTime: 2022-08-23 17:26:08
 * @LastEditors: 王东旭
 * @Description:给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * @FilePath: /letcode/src/稀土课堂/数组/合并两个有序数组.ts
 *
 */
// 双指针
export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  if(n===0) return nums1 
  if(m===0){
    for (let index = 0; index < n; index++) {
      nums1[index] = nums2[index] 
    }
    return nums1
  }
  let i = m -1
  let j = n -1
  let k = nums1.length-1
  while (i>=0 && j>=0) {
    if(nums1[i]>nums2[j]){
        nums1[k] = nums1[i]
        i--
        k--
    }else{
        nums1[k] = nums2[j]
        j--
        k--
    }
  }
  if(i<0 && j>=0){
    for (let index = 0; index <= j; index++) {
       nums1[index]=nums2[index] 
    }
  }
 return nums1 
};

// js数组排序
export function merge2(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let i = m
  nums2.forEach(num=>{
   nums1[i]  = num
   i++
  })
  nums1.sort((a,b)=>{
    return a-b
  })
  return nums1
}