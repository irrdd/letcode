import { ListNode, SingleLink } from "@/基本数据结构/SingleLink";
import { reverseKGroup,reverseKGroup2 } from '@/labuladong的算法小抄/链表/25.K 个一组翻转链表'
import { linkToArray } from "@/util/linkUtil";

describe('普通方法', () => {
    test('正常链表k组反转,k=3', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 3
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([3, 2, 1, 6, 5, 4, 9, 8, 7, 0])
    })

    test('正常链表k组反转,k=2', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 2
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([2, 1, 4, 3, 6, 5, 8, 7, 0, 9])
    })
    test('正常链表k组反转,k等于链表长度', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 10
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([0, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
    test('正常链表,k=1', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 1
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    })
    test('只有两个节点的链表,k=2', () => {
        const arr = [1,2]
        const k = 2 
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([2,1])
    })
    test('只有一个头节点,k=1', () => {
        const arr = [1]
        const k = 1
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([1])
    })
})
describe('迭代', () => {
    test('正常链表k组反转,k=3', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 3
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup2(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([3, 2, 1, 6, 5, 4, 9, 8, 7, 0])
    })

    test('正常链表k组反转,k=2', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 2
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup2(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([2, 1, 4, 3, 6, 5, 8, 7, 0, 9])
    })
    test('正常链表k组反转,k等于链表长度', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 10
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup2(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([0, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
    test('正常链表,k=1', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const k = 1
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup2(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    })
    test('只有两个节点的链表,k=2', () => {
        const arr = [1,2]
        const k = 2 
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup2(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([2,1])
    })
    test('只有一个头节点,k=1', () => {
        const arr = [1]
        const k = 1
        const head = new SingleLink(arr).head
        const resLink = reverseKGroup2(head, k)
        const resArr = linkToArray(resLink)
        expect(resArr).toEqual([1])
    })
})
