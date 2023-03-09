import { ListNode } from "@/links/SingleLink";
import { detectCycle } from './142.环形链表2'

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB ) return null;
    if(headA===headB) return headA
    let lenA = 0
    let lenB = 0
    let idxA = headA
    let idxB = headB
    while (idxA) {
        idxA = idxA.next
        lenA++
    }
    while (idxB) {
        idxB = idxB.next
        lenB++
    }
    idxA = headA
    idxB = headB

    if (lenA > lenB) {
        let temp = lenA - lenB;
        while (temp) {
            idxA = idxA.next
            temp--
        }
    } else {
        let temp = lenB - lenA;
        while (temp) {
            idxB = idxB.next
            temp--
        }
    }
    while (idxA && idxB) {
        if (idxA === idxB) return idxA;
        idxA = idxA.next
        idxB = idxB.next
    }
    return null
};

export function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB ) return null;
    if(headA===headB) return headA
    let idxA = headA
    while (idxA.next) {
        idxA = idxA.next
    }
    let tailA = idxA.next
    idxA.next = headB


    const resNode = detectCycle(headA)

    idxA.next = tailA
    return resNode
};