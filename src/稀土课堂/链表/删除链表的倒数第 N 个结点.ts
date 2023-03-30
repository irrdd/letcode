
/*
 * @Author: 王东旭
 * @Date: 2022-09-14 20:43:56
 * @LastEditTime: 2022-09-14 21:35:47
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: \letcode\src\稀土课堂\链表\删除链表的倒数第 N 个结点.ts
 *  
 */
import { ListNode } from "@/基本数据结构/SingleLink";
// 快慢指针法
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head) return head
    const temp = new ListNode(null,head)
    let fast = temp
    let low = temp
    while(n){
        fast = fast.next
        n--
    }
    while (fast.next) {
       low = low.next 
       fast = fast.next
    }
    low.next = low.next.next
    return temp.next
};
//借助数组
export function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
    if(!head) return head
    const arr:ListNode[] = []
    const temp = new ListNode(null,head)
    let cur = temp
    while (cur) {
       arr.push(cur) 
       cur = cur.next
    }
    arr[arr.length-n-1].next = arr[arr.length-n].next
    return temp.next
};
