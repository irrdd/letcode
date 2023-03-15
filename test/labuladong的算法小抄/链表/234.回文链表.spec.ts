import { ListNode, SingleLink } from "@/links/SingleLink";
import { isPalindrome } from '@/labuladong的算法小抄/链表/234.回文链表'
import { linkToArray } from "@/util/linkUtil";

describe('反转部分链表', () => { 
    test('正常奇数链表,非回文链表', () => { 
        const head = new SingleLink([1, 2, 3, 4, 5]).head
        const res = isPalindrome(head)
        expect(res).toBeFalsy()
     }) 

    test('正常奇数链表,回文链表', () => { 
        const head = new SingleLink([1, 2, 3, 2, 1]).head
        const res = isPalindrome(head)
        expect(res).toBeTruthy()
     }) 
    test('正常偶数链表,非回文链表', () => { 
        const head = new SingleLink([1, 2, 3, 4, 5,6]).head
        const res = isPalindrome(head)
        expect(res).toBeFalsy()
     }) 
    test('正常偶数链表,回文链表', () => { 
        const head = new SingleLink([1, 2, 3, 3, 2,1]).head
        const res = isPalindrome(head)
        expect(res).toBeTruthy()
     }) 
    test('只有两个节点的链表，回文链表', () => { 
        const head = new SingleLink([1, 1]).head
        const res = isPalindrome(head)
        expect(res).toBeTruthy()
     }) 

    test('只有两个节点的链表，非回文链表', () => { 
        const head = new SingleLink([1, 2]).head
        const res = isPalindrome(head)
        expect(res).toBeFalsy()
     }) 
    test('只有一个节点的链表，回文链表', () => { 
        const head = new SingleLink([1]).head
        const res = isPalindrome(head)
        expect(res).toBeTruthy()
     }) 
 })