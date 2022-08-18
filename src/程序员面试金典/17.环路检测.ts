/*
 * @Author: 王东旭
 * @Date: 2022-08-17 14:21:18
 * @LastEditTime: 2022-08-17 15:03:55
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: /letcode/src/程序员面试金典/17.环路检测.ts
 *  
 */

import ListNode from "@/基本数据结构/单链表节点";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 export var detectCycle = function(head:ListNode):ListNode | null {
    
   if(!head || !head.next) return null
    const set = new Set()
    let cur = head
    while (cur) {
        if (set.has(cur)) {
           return cur 
        }else{
            set.add(cur)
            cur = cur.next
        }
        
    }
    return null
};