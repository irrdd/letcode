import { ListNode, SingleLink } from "@/links/SingleLink";
import { partition } from '@/labuladong的算法小抄/链表/86.分隔链表'
import { linkToArray } from "@/util/linkUtil";

describe('双指针', () => { 
    test('链表只有一个节点', () => { 
        const head = new ListNode(1,null)
        const resLink = partition(head,0)
        expect(resLink).toEqual(head)
    })
   
    test('链表为空', () => { 
        const head = null 
        const resLink = partition(head,0)
        expect(resLink).toBeNull()
    })

    test('正常乱序链表', () => { 
        const arr = [1,5,8,3,2,6]
        const num = 4
        const head = new SingleLink(arr).head
        const resLink = partition(head,num)
        const resArr =linkToArray(resLink) 
        expect(resArr).toEqual([1,3,2,5,8,6])
     })
    test('正常升序序链表,num取最小', () => { 
        const arr = [-1,2,3,4,5]
        const num = -2 
        const head = new SingleLink(arr).head
        const resLink = partition(head,num)
        const resArr =linkToArray(resLink) 
        expect(resArr).toEqual([-1,2,3,4,5])
     })
    test('正常乱序链表,num取最大', () => { 
        const arr = [1,-5,8,3,2,6]
        const num = 9
        const head = new SingleLink(arr).head
        const resLink = partition(head,num)
        const resArr =linkToArray(resLink) 
        expect(resArr).toEqual([1,-5,8,3,2,6])
     })
     test('正常升序序链表,力扣测试用例', () => { 
        const arr = [1,4,3,2,5,2]
        const num = 3 
        const head = new SingleLink(arr).head
        const resLink = partition(head,num)
        const resArr =linkToArray(resLink) 
        expect(resArr).toEqual([1,2,2,4,3,5])
     })
 })