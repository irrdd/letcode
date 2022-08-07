/*
 * @Author: 王东旭
 * @Date: 2022-08-06 22:38:53
 * @LastEditTime: 2022-08-07 22:39:42
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: \letcode\src\程序员面试金典\10. 移除重复节点.ts
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
import { SingleLink, SingleNode } from "../links/SingleLink";

function removeDuplicateNodes(head: SingleNode | null): SingleNode | null {
  if (!head || !head.next) return head;
  let map = new Map();
  let cur = head;
  while (cur) {
    if (!map.has(cur.data)) {
        cur.next = null
      map.set(cur.data, cur);
    }
    cur = cur.next;
  }
  //   console.log(map);

  let pre = head;
  let tail = pre;
  map.forEach((value) => {
    tail.next = value;
    tail = tail.next;
  });

  return pre.next;
}

let temp = new SingleLink([1,2,3,3,2,1]);

console.log(removeDuplicateNodes(temp.head));


export {};
