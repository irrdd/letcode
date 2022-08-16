/*
 * @Author: 王东旭
 * @Date: 2022-08-16 10:23:40
 * @LastEditTime: 2022-08-16 11:01:54
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

import { SingleLink, ListNode } from "../links/SingleLink";
 function partition(head: ListNode | null, x: number): ListNode | null {
    if(!head || !head.next) return head
    let cur = head
    let arr1:ListNode[] = []
    let arr2:ListNode[] = []
    while (cur) {
        if(cur.val<x){
            arr1.push(cur)
        }else{
            arr2.push(cur)
        }
       cur  = cur.next 
    }
    let arr = [...arr1,...arr2]
    let temp = arr[0]
    for (let index = 1; index < arr.length; index++) {
        temp.next = arr[index]
        temp = temp.next
    }
    return temp

};
const temp = new SingleLink([1,2,3,4,5,6,7])
console.log(partition(temp.head,4));

export {}
