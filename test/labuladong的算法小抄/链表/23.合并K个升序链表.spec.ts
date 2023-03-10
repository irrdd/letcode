import { ListNode, SingleLink } from "@/links/SingleLink";
import { mergeKLists } from '@/labuladong的算法小抄/链表/23.合并K个升序链表'
import { linkToArray } from "@/util/linkUtil";

describe('合并K个升序链表', () => { 
    test('链表数组是空', () => { 
        expect(mergeKLists([])).toBeNull()
     }) 
    test('乱序正常的链表组', () => { 
         const head1 = new SingleLink([1,5,9]).head
         const head2 = new SingleLink([2,3,8]).head
         const head3 = new SingleLink([4,6,7]).head
         const resArr = linkToArray(mergeKLists([head1,head2,head3]))
         expect(resArr).toEqual([1,2,3,4,5,6,7,8,9])
      })

    test('乱序,有特殊链表的链表组', () => { 
         const head1 = new SingleLink([1]).head
         const head2 = new SingleLink([2,3,8]).head
         const head4 = new SingleLink([]).head
         const head3 = new SingleLink([4,5,6,7,9]).head
         const resArr = linkToArray(mergeKLists([head1,head2,head3]))
         expect(resArr).toEqual([1,2,3,4,5,6,7,8,9])
      })
    test('正序链表的链表组', () => { 
         const head1 = new SingleLink([1,2,3]).head
         const head2 = new SingleLink([4,5,6]).head
         const head3 = new SingleLink([7,8,9]).head
         const resArr = linkToArray(mergeKLists([head1,head2,head3]))
         expect(resArr).toEqual([1,2,3,4,5,6,7,8,9])
      })

    test('倒序链表的链表组', () => { 
         const head1 = new SingleLink([1,2,3]).head
         const head2 = new SingleLink([4,5,6]).head
         const head3 = new SingleLink([7,8,9]).head
         const resArr = linkToArray(mergeKLists([head3,head2,head1]))
         expect(resArr).toEqual([1,2,3,4,5,6,7,8,9])
      })
    test('有相同值的链表组', () => { 
         const head1 = new SingleLink([1,3,5]).head
         const head2 = new SingleLink([2,3,4]).head
         const head3 = new SingleLink([4,6,7]).head
         const resArr = linkToArray(mergeKLists([head1,head2,head3]))
         expect(resArr).toEqual([1,2,3,3,4,4,5,6,7])
      })
 })