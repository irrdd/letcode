import { ListNode } from "@/links/SingleLink";

export function middleNode(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head
    let fast =  head
    let low = head
    while (fast && fast.next) {
        fast = fast.next.next
        low = low.next
    }
    return low

};