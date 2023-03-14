import { ListNode } from "@/links/SingleLink";
import { reverseList } from "@/labuladong的算法小抄/链表/206.反转链表";
import { reverseN } from '@/labuladong的算法小抄/链表/反转链表前N个节点'
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || !head.next) return head
    const tempNode = new ListNode(null, head)
    let newLeft = left - 1
    let newRight = right 
    let leftNode = tempNode
    let rightNode = tempNode
    while (newRight) {
        if (newLeft) {
            leftNode = leftNode.next
            newLeft--
       } 
        rightNode = rightNode.next
        newRight--
    }
    const rightNextNode = rightNode.next
    rightNode.next = null
    const revNode = reverseList(leftNode.next)
    leftNode.next = revNode
    let rev = revNode
    while (rev && rev.next) {
       rev = rev.next 
    }
    rev.next = rightNextNode
    return tempNode.next
};

export function reverseBetween2(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === 1) {
        return reverseN(head,right)
    }
    head.next = reverseBetween2(head.next,left-1,right-1)
    return head 
};