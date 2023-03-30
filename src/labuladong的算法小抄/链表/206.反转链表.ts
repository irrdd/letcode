import { ListNode } from "@/基本数据结构/SingleLink";

export function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    const tempNode =  reverseList(head.next)
    head.next.next = head
    head.next = null
    return tempNode
};