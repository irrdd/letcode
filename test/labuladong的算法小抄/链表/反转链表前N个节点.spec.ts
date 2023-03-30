import { ListNode, SingleLink } from "@/基本数据结构/SingleLink";
import { reverseN } from '@/labuladong的算法小抄/链表/反转链表前N个节点'
import { linkToArray } from "@/util/linkUtil";

describe("递归", () => {

    test('正常链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 3
        const res = reverseN(link.head, left)
        const arr = linkToArray(res)
        expect(arr).toEqual([3, 2, 1, 4, 5])
    })
    test('单节点链表反转', () => {
        const link = new SingleLink([1])
        const res = reverseN(link.head, 1)
        const arr = linkToArray(res)
        expect(arr).toEqual([1])
    })
    test('只有两个节点的链表', () => {
        const link = new SingleLink([1, 2])
        const left = 2
        const res = reverseN(link.head, left)
        const arr = linkToArray(res)
        expect(arr).toEqual([2, 1])
    })
    test('包含尾节点的链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 5
        const res = reverseN(link.head, left)
        const arr = linkToArray(res)
        expect(arr).toEqual([5, 4, 3, 2, 1])
    })
    test('包含尾节点的链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 1
        const res = reverseN(link.head, left)
        const arr = linkToArray(res)
        expect(arr).toEqual([1, 2, 3, 4, 5])
    })
});