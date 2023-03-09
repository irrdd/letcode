
import { ListNode, SingleLink } from "@/links/SingleLink";
import { removeNthFromEnd } from '@/labuladong的算法小抄/链表/19.删除链表的倒数第 N 个结点'
import {  linkToArray } from "@/util/linkUtil";


const util = ({ arr, pos }: { arr: number[], pos: number }) => {
    const head = (new SingleLink(arr)).head
    const res = removeNthFromEnd(head, pos)
    const arrRes = linkToArray(res)
    const expectRes = [...arr]
    expectRes.splice(expectRes.length - pos, 1)
    return {
        arrRes,
        expectRes
    }
}

describe('删除链表的倒数第N个', () => {
    test('正常链表，删除中间节点', () => {
        const arr = [1, 2, 3, 4, 5]
        const pos = 2
        const { arrRes, expectRes } = util({arr, pos})
        expect(arrRes).toEqual(expectRes)
    })
    test('正常链表，删除尾节点', () => { 
        const arr = [1, 2, 3, 4, 5]
        const pos = 1
        const { arrRes, expectRes } = util({arr, pos})
        expect(arrRes).toEqual(expectRes)
     })

    test('正常链表，删除头节点', () => { 
        const arr = [1, 2, 3, 4, 5]
        const pos = 5
        const { arrRes, expectRes } = util({arr, pos})
        expect(arrRes).toEqual(expectRes)
     })
    test('只有头节点，删除头节点', () => { 
        const head = new ListNode(1,null)
        const arrRes = removeNthFromEnd(head,1)
        expect(arrRes).toBeNull()
     })
     test('只有两个节点，删除尾节点', () => { 
        const arr = [1, 2]
        const pos = 1 
        const { arrRes, expectRes } = util({arr, pos})
        expect(arrRes).toEqual(expectRes)
     })
})