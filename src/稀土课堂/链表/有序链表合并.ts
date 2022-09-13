
/*
 * @Author: 王东旭
 * @Date: 2022-09-13 20:42:03
 * @LastEditTime: 2022-09-13 21:43:35
 * @LastEditors: 王东旭
 * @Description:  将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 * @FilePath: \letcode\src\稀土课堂\链表\有序链表合并.ts
 *  
 */
import { ListNode } from "@/links/SingleLink";
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(!list1) return list2
  if(!list2) return list1
  let one = list1
  let two = list2
  const temp = new ListNode(0,null)
  let cur = temp 
  while (one && two) {
    if(one.val>two.val) {
        cur.next = two
        cur = cur.next
        two = two.next
    }else{
        cur.next = one
        cur = cur.next
        one = one.next
    }
  }
  if(one){
    cur.next = one
  }
  if(two){
    cur.next = two
  }

  return temp.next
};