import { ListNode } from "@/links/SingleLink";

export function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    const tempNode =  reverseList(head.next)
    head.next.next = head
    head.next = null
    return tempNode
};