import { ListNode, SingleLink } from "@/links/SingleLink";
import { reverseBetween,reverseBetween2 } from '@/labuladong的算法小抄/链表/92.反转链表2'
import { linkToArray } from "@/util/linkUtil";


describe("调用反转链表", () => {

    test('正常链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 2
        const right = 4
        const res = reverseBetween(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([1, 4, 3, 2, 5])
    })
    test('单节点链表反转', () => {
        const link = new SingleLink([1])
        const res = reverseBetween(link.head, 0, 0)
        const arr = linkToArray(res)
        expect(arr).toEqual([1])
    })
    test('只有两个节点的链表', () => {
        const link = new SingleLink([1, 2,])
        const left = 1
        const right = 2
        const res = reverseBetween(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([2, 1])
    })
    test('包含尾节点的链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 3
        const right = 5
        const res = reverseBetween(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([1, 2, 5, 4, 3])
    })
    test('包含头节点的链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 1
        const right = 3
        const res = reverseBetween(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([3, 2, 1, 4, 5])
    })
    test('全部节点都反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 1
        const right = 5
        const res = reverseBetween(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([5, 4, 3, 2, 1])
    })
});
describe("递归", () => {

    test('正常链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 2
        const right = 4
        const res = reverseBetween2(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([1, 4, 3, 2, 5])
    })
    test('单节点链表反转', () => {
        const link = new SingleLink([1])
        const res = reverseBetween2(link.head, 1, 1)
        const arr = linkToArray(res)
        expect(arr).toEqual([1])
    })
    test('只有两个节点的链表', () => {
        const link = new SingleLink([1, 2,])
        const left = 1
        const right = 2
        const res = reverseBetween2(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([2, 1])
    })
    test('包含尾节点的链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 3
        const right = 5
        const res = reverseBetween2(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([1, 2, 5, 4, 3])
    })
    test('包含头节点的链表反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 1
        const right = 3
        const res = reverseBetween2(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([3, 2, 1, 4, 5])
    })
    test('全部节点都反转', () => {
        const link = new SingleLink([1, 2, 3, 4, 5])
        const left = 1
        const right = 5
        const res = reverseBetween2(link.head, left, right)
        const arr = linkToArray(res)
        expect(arr).toEqual([5, 4, 3, 2, 1])
    })
});