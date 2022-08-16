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
//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }

import { ListNode } from "../../links/SingleLink";
 function reversePrint(head: ListNode | null): number[] {
    let arr = []
    let tag = head
    while (tag) {
        arr.unshift(tag.val)
        tag = tag.next
    }
    return arr
};
// 递归
function reversePrint1(head: ListNode | null): number[] {
    let arr = []
    function recur(node: ListNode){
        if (!node) {
            return
        }
        recur(node.next)
        arr.push(node.val)
    }
    recur(head)
    return arr
};

// let tail = new ListNode(2)
// let center = new ListNode(3,tail)
// let head = new ListNode(1,center)

// console.log(reversePrint1(head));
