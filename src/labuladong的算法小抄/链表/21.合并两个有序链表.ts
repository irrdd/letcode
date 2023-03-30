import { ListNode } from "@/基本数据结构/SingleLink";

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1
    const head = new ListNode(null, null)
    let res = head
    let one = list1
    let two = list2
    while (one && two) {
        if (one.val < two.val) {
            res.next = one
            one = one.next
        } else {
            res.next = two
            two = two.next
        }
        res = res.next
    }
    if (one) {
        res.next = one
    }
    if (two) {
        res.next = two
    }

    return head.next
};