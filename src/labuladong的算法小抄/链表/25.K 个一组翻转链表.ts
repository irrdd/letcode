import { ListNode } from "@/基本数据结构/SingleLink";
import { reverseList } from "@/labuladong的算法小抄/链表/206.反转链表";
import { reverseN } from '@/labuladong的算法小抄/链表/反转链表前N个节点'
export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 1) return head
    let num = k - 1
    const resHead = reverseN(head, k)
    let temp = resHead
    while (temp) {
        if (num === 0) {
            let tail = temp
            let m = k
            while (tail && m) {
                tail = tail.next
                m--
            }
            if (!tail) break;
            temp.next = reverseN(temp.next, k)
            num = k
        } else {
            num--
            temp = temp.next
        }
    }

    return resHead

};

export function reverseKGroup2(head: ListNode | null, k: number): ListNode | null {
    if(!head || !head.next) return head
    let tail = head
    let num = k-1
    while (tail && num) {
       tail = tail.next 
       num--
    }
    if (!tail) return head
    const temp = reverseKGroup2(tail.next, k)
    tail.next = null
    const res = reverseList(head)
    head.next = temp
    return res
};