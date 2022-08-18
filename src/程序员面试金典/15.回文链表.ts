
/*
 * @Author: 王东旭
 * @Date: 2022-08-17 09:48:04
 * @LastEditTime: 2022-08-18 13:26:56
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: /letcode/src/程序员面试金典/15.回文链表.ts
 *  
 */
import { ListNode } from "@/links/SingleLink";
export function isPalindrome(head: ListNode | null): boolean {
    if(!head) return true
    const arr:number[] = []
    let cur = head
    while (cur) {
       arr.push(cur.val as number) 
       cur = cur.next
    }
    const str1 = arr.join('')
    const str2 = arr.reverse().join('')
    return str1 === str2 
};