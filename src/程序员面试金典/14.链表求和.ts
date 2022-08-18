/*
 * @Author: 王东旭
 * @Date: 2022-08-16 20:32:43
 * @LastEditTime: 2022-08-18 13:27:06
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/src/程序员面试金典/14.链表求和.ts
 *
 */

import { ListNode } from "@/links/SingleLink";
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) return null;
  let one = l1;
  let two = l2;
  let temp = new ListNode(0, null);
  let cur = temp;
  let flag = 0;
  while (one && two) {
    const link = new ListNode(1, null);
    const num = (one.val as number) + (two.val as number) + flag;
    link.val = num  % 10
    flag = Math.floor(num / 10);
    cur.next = link;
    cur = cur.next;
    one = one.next;
    two = two.next;
  }
  while (one) {
    const link = new ListNode(0, null);
    const num = (one.val as number) + flag;
    link.val = num % 10;
    flag = Math.floor(num / 10);
    cur.next = link;
    cur = cur.next;
    one = one.next;
  }

  while (two) {
    const link = new ListNode(0, null);
    const num = (two.val as number) + flag;
    link.val = num % 10;
    flag = Math.floor(num / 10);
    cur.next = link;
    cur = cur.next;
    two = two.next;
  }
  if (flag !== 0) {
    const link = new ListNode(0, null);
    link.val = flag;
    cur.next = link;
  }
  return temp.next;
}
