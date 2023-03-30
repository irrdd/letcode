/*
 * @Author: 王东旭
 * @Date: 2022-08-15 22:21:46
 * @LastEditTime: 2022-08-18 13:27:24
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/src/程序员面试金典/11.返回倒数第k个节点.ts
 *
 */

import { SingleLink, ListNode } from "@/基本数据结构/SingleLink";
// 借助数组完成，空间复杂度高
export function kthToLast(head: ListNode | null, k: number): number {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr[arr.length - k];
}
// 快慢指针法
export function kthToLast2(head: ListNode | null, k: number): number {
  let fast = head;
  let low = head;
  while (k--) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    low = low.next;
  }
  return low.val as number;
}
const temp = new SingleLink([1, 2, 3,4,5]);
