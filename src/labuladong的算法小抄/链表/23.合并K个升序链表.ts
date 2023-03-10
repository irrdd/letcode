import { ListNode } from "@/links/SingleLink";
import { mergeTwoLists } from '@/labuladong的算法小抄/链表/21.合并两个有序链表'    

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length === 0) return null
   return lists.reduce((mergeLine, line) => { 
        return mergeTwoLists(mergeLine,line)
     })
};