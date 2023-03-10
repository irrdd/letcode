import { ListNode, SingleLink } from "@/links/SingleLink";
import { middleNode } from '@/labuladong的算法小抄/链表/876.链表的中间结点'
import { linkToArray } from "@/util/linkUtil";

describe('找出并返回链表的中间结点', () => {
    test('节点是空或者只有一个头节点', () => {
        expect(middleNode(null)).toBeNull()
        const head = new ListNode(1, null)
        expect(middleNode(head)).toEqual(head)
    })

    test('链表只有两个节点', () => {
        const head = new SingleLink([1, 2]).head
        const resNode = middleNode(head)
        const resArr = linkToArray(resNode)
        expect(resArr).toEqual([2])
    })

    test('奇数节点链表', () => {
        const head = new SingleLink([1, 2, 3, 4, 5]).head
        const resNode = middleNode(head)
        const resArr = linkToArray(resNode)
        expect(resArr).toEqual([3,4,5])
    })
    test('偶数节点链表', () => {
        const head = new SingleLink([1, 2, 3, 4, 5, 6]).head
        const resNode = middleNode(head)
        const resArr = linkToArray(resNode)
        expect(resArr).toEqual([4,5,6])
    })
})