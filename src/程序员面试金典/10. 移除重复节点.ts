/*
 * @Author: 王东旭
 * @Date: 2022-08-06 22:38:53
 * @LastEditTime: 2022-08-15 22:18:00
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
   if(!head || !head.next) return head;
   let cur = head
   let pre = head
   const set = new Set()
  while(cur){
    if (set.has(cur.data)) {
     pre.next = cur.next
     cur = cur.next 
    }else{
      set.add(cur.data)
      pre = cur
      cur = cur.next

    }

  } 
  return head
}
let temp = new SingleLink([1,2,3,3,2,1]);
console.log(temp.head);


console.log(removeDuplicateNodes(temp.head));


export {};
