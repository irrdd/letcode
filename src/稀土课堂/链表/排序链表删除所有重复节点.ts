/*
 * @Author: 王东旭
 * @Date: 2022-09-13 22:39:40
 * @LastEditTime: 2022-09-13 23:20:57
 * @LastEditors: 王东旭
 * @Description:给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字
 * @FilePath: \letcode\src\稀土课堂\链表\排序链表删除所有重复节点.ts
 *
 */

import { ListNode } from "@/links/SingleLink";
export const unqit = (link: ListNode): ListNode => {
  if(!link.next) return link
  let temp = new ListNode(0, link);
  let cur = temp
  while (cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val){
        let val = cur.next.val
        while(cur.next && cur.next.val === val){
            cur.next = cur.next.next
        }
    }else{
        cur = cur.next
    }
  }
  return temp.next;
};
