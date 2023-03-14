import { ListNode, SingleLink } from "@/links/SingleLink";
import { reverseList } from '@/labuladong的算法小抄/链表/206.反转链表'
import { linkToArray } from "@/util/linkUtil";


describe("递归", () => {

    test('正常链表反转',() => {
        const link = new SingleLink([1,2,3,4,5])
        const res = reverseList(link.head)
        const arr = linkToArray(res)
        expect(arr).toEqual([5,4,3,2,1])
    })
        test('单节点链表反转',() => {
        const link = new SingleLink([1])
        const res = reverseList(link.head)
        const arr = linkToArray(res)
        expect(arr).toEqual([1])
    })
        test('空链表反转',() => {
        const link = null
        const res = reverseList(link)
        expect(res).toBeNull()
    })
});