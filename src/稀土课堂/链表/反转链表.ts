/*
 * @Author: 王东旭
 * @Date: 2022-09-14 21:38:30
 * @LastEditTime: 2022-09-14 22:51:46
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: \letcode\src\稀土课堂\链表\反转链表.ts
 *
 */
import { ListNode } from "@/基本数据结构/SingleLink";

//迭代
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const temp = new ListNode(null, null);
  let tag = temp;
  function one(link: ListNode | null) {
    if (!link) return;
    one(link.next);
    tag.next = link;
    if (link === head) {
      link.next = null;
    }
    tag = tag.next;
  }

  one(head);
  return temp.next;
}

// 尾插法
export function reverseList3(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const temp = new ListNode(null, head);
  let two = head.next;
  head.next = null;
  while (two) {
    let cur = two.next;
    two.next = temp.next;
    temp.next = two;
    two = cur;
  }
  return temp.next;
}
//多指针
export function reverseList2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let one = head;
  let two = one.next;
  let three = two.next;
  one.next = null;
  while (two) {
    two.next = one;
    one = two;
    two = three;
    if (three) {
      three = three.next;
    }
  }
  return one;
}
