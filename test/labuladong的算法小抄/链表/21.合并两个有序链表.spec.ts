import { ListNode, SingleLink } from "@/links/SingleLink";
import { mergeTwoLists } from '@/labuladong的算法小抄/链表/21.合并两个有序链表'
import {  linkToArray } from "@/util/linkUtil";

describe('双指针', () => { 
    test('list1为null,或list2未null', () => { 
        const arr = [1,2,3,4,5]
        const list1 = null
        const list2 = new SingleLink(arr).head
        const res1 = mergeTwoLists(list1,list2)
        expect(res1).toEqual(list2)
        const res2 = mergeTwoLists(list2,list1)
        expect(res2).toEqual(list2)
    })
    test('两个节点都是null', () => { 
        const res1 = mergeTwoLists(null,null)
        expect(res1).toBeNull()
     })

    test('正常链表，各有大小', () => { 
         const arr1 = [1,3,5,7,9]
         const arr2 = [2,4,6,8]
         const head1 = new SingleLink(arr1).head
         const head2 = new SingleLink(arr2).head
         const resLink = mergeTwoLists(head1,head2)
         const resArr = linkToArray(resLink)
         expect(resArr).toEqual([1,2,3,4,5,6,7,8,9])
      })
     
    test('正常链表，其中一个链表全部小于另一个链表', () => { 
         const arr1 = [1,2,3]
         const arr2 = [4,6,8]
         const head1 = new SingleLink(arr1).head
         const head2 = new SingleLink(arr2).head
         const resLink = mergeTwoLists(head1,head2)
         const resArr = linkToArray(resLink)
         expect(resArr).toEqual([1,2,3,4,6,8])
      })

 })