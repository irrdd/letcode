/*
 * @Author: 王东旭
 * @Date: 2022-09-13 21:40:40
 * @LastEditTime: 2022-09-13 21:48:41
 * @LastEditors: 王东旭
 * @Description: 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。 
 * @FilePath: \letcode\src\稀土课堂\链表\有序链表删除重复节点.ts
 *  
 */
import { ListNode } from "@/links/SingleLink";
export const uniqtLink = (link:ListNode | null):ListNode | null => {
   if(!link)  return link
   let cur = link
   while (cur &&  cur.next) {
     if(cur.val===cur.next.val) {
        cur.next = cur.next.next
     }else{
        cur = cur.next
     }
   }

   return link

};
