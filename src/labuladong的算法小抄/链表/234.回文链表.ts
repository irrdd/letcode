import { ListNode } from "@/links/SingleLink";
import { reverseList } from "@/labuladong的算法小抄/链表/206.反转链表";

export function isPalindrome(head: ListNode | null): boolean {
    if (!head.next) return true
    let fast = head
    let low = head
    while (fast && fast.next) {
        low = low.next
        fast = fast.next.next
    }
    let temp = reverseList(!fast ? low : low.next)

    while (temp) {
        if (temp.val !== head.val) return false;
        temp = temp.next
        head = head.next
    }
    return true

};