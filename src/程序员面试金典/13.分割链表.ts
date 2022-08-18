/*
 * @Author: 王东旭
 * @Date: 2022-08-16 10:23:40
 * @LastEditTime: 2022-08-18 13:27:14
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/src/程序员面试金典/13.分割链表.ts
 *
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "@/links/SingleLink";

// 借助两个数组完成
export function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) return head;
  let cur = head;
  let arr1: ListNode[] = [];
  let arr2: ListNode[] = [];
  while (cur) {
    if (cur.val < x) {
      arr1.push(cur);
    } else {
      arr2.push(cur);
    }
    cur = cur.next;
  }
  let arr = [...arr1, ...arr2];
  let temp = arr[0];
  for (let index = 1; index < arr.length; index++) {
    temp.next = arr[index];
    temp = temp.next;
  }
  arr[arr.length - 1].next = null;
  return arr[0];
}
// 借助单数组
export function partition2(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) return head;
  const arr: ListNode[] = [];
  const temp = new ListNode(0, head);
  let cur = head;
  let pre = temp;
  while (cur) {
    if (cur.val < x) {
      pre = cur;
      cur = cur.next;
    } else {
      arr.push(cur);
      pre.next = cur.next;
      cur = cur.next;
    }
  }
  if (arr.length !== 0) {
    arr[arr.length - 1].next = null;
  }
  arr.forEach((link) => {
    pre.next = link;
    pre = pre.next;
  });
  return temp.next;
}
// 两个链表
export function partition3(head: ListNode | null, x: number): ListNode | null {
  const samilNode = new ListNode(0, null);
  const largeNode = new ListNode(0, null);
  let samil = samilNode;
  let large = largeNode;
  let cur = head;
  while (cur) {
    if (cur.val < x) {
      samil.next = cur;
      samil = samil.next;
      cur = cur.next;
    } else {
      large.next = cur;
      large = large.next;
      cur = cur.next;
    }
  }
  large.next = null;
  samil.next = null;
  samil.next = largeNode.next;
  return samilNode.next;
}
