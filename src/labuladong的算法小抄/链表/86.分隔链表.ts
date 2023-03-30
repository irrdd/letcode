import { ListNode } from "@/基本数据结构/SingleLink";


export function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head || !head.next) return head
    const headLow = new ListNode(null,null)
    const headFast = new ListNode(null,null)
    let low = headLow
    let fast = headFast
    let temp = head
    while (temp) {
        if (temp.val < x) {
            low.next = temp
            low = low.next
        } else {
            fast.next = temp
            fast = fast.next
       } 
       temp = temp.next
    }
    low.next = headFast.next
    fast.next = null
    return headLow.next
};