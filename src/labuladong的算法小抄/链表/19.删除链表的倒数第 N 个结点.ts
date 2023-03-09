
import { ListNode } from "@/links/SingleLink";
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head.next && n===1) return null
    let num = n
    let fast = head
    let low = head
    while (num ) {
        fast = fast.next
        num--
    }
    if(!fast) return head.next
    while (fast.next) {
        fast = fast.next
       low = low.next 
    }
    low.next = low.next.next
    return head
};