/*
 * @Author: 王东旭
 * @Date: 2022-08-17 10:47:33
 * @LastEditTime: 2022-08-18 13:26:32
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/src/程序员面试金典/16.链表相交.ts
 *
 */
import ListNode from "@/基本数据结构/单链表节点";
// 借用Set进行辅助 ，空间复杂度 n 时间复杂度 n
export const getIntersectionNode = function (
  headA: ListNode,
  headB: ListNode
): ListNode | null {
   const visited = new Set();
   let temp = headA;
   while (temp !== null) {
       visited.add(temp);
       temp = temp.next;
   }
   temp = headB;
   while (temp !== null) {
       if (visited.has(temp)) {
           return temp;
       }
       temp = temp.next;
   }
   return null;


};


// 双指针，空间复杂度 1 时间复杂度 n+m
export const getIntersectionNode2 = function (
  headA: ListNode,
  headB: ListNode
): ListNode | null {
   if(!headA || !headB) return null
   let one = headA
   let two = headB
   while (one !== two) {
     one = one ? one.next : headB
     two = two ? two.next : headA
   }
   return one
};

