/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
// 原地反转
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    let tag = head,
        center = head.next,
        tail = head.next.next 
        tag.next = null
        center.next = tag

    while (center){
        center.next = tag
        tag = center
        center = tail
        if (center) {
            tail = tail.next 
        }
        
    }
    return tag


};
// 递归
function reverseList1(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
   let temp = new ListNode(0)
   let tag = temp
    function aaa(node: ListNode | null){
        if (!node) {
            return
        }
        aaa(node.next)
        tag.next = node
        if (node === head) {
            node.next = null
        }
        tag = tag.next


    }
    aaa(head)


   return temp.next


};
// 栈
function reverseList2(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    let tag = head
    let arr = []
    let temp = new ListNode(0)
    let tag2 = temp
    while(tag){
        arr.push(tag)
        tag = tag.next
    }
    while(arr.length){
        tag2.next = arr.pop()
        tag2 = tag2.next
        if (tag2 === head) {
            tag2.next = null
        }
    }
    return temp.next

};
// 头插法
function reverseList3(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
     let temp = new ListNode(0)
    let tag = head
    let tag2:ListNode | null
    while(tag){
        tag2 = temp.next
        temp.next = tag
        tag = tag.next
        temp.next.next = tag2
    }


    return temp.next

};


let tail1 = new ListNode(3)
let center1 = new ListNode(2,tail1)
let head1 = new ListNode(1,center1)
console.log(reverseList3(head1));
