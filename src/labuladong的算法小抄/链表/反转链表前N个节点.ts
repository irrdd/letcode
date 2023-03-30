
import { ListNode } from "@/基本数据结构/SingleLink";

let tail = null

export function reverseN(head: ListNode | null, n: number): ListNode | null {
    if (n === 1) {
        tail = head.next
        return head
    }
    const tempHead = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = tail
    return tempHead
};