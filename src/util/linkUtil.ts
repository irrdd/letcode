/*
 * @Author: 王东旭
 * @Date: 2022-08-16 11:04:13
 * @LastEditTime: 2022-08-17 15:26:48
 * @LastEditors: 王东旭
 * @Description: 链表的相关方法
 * @FilePath: /letcode/src/util/linkUtil.ts
 *  
 */
import { ListNode  } from "../links/SingleLink";
/**
 * @description: 将链表转换成数组，方便查看 
 * @param {ListNode} link 传入的链表
 * @return {unknown[]} 返回的数组
 */
export function linkToArray(link:ListNode | null):unknown[]{
    if(!link) return []
    let cur = link
    const arr:unknown[] = []
    while (cur) {
       arr.push(cur.val) 
       cur = cur.next 
    }
    return arr
}

/**
 * @description: 生成链表，并将链表的节点放到数组中 
 * @param {number[]} arr 链表的值
 * @return {ListNode[]} 放置链表的数组
 */
export function linkInArray(arr: number[]): ListNode[] {
  const linkArr: ListNode[] = [];
  arr.forEach((element) => {
    const temp = new ListNode(element, null);
    linkArr.push(temp);
  });
  for (let index = 0; index < linkArr.length; index++) {
    if (index === linkArr.length - 1) {
      linkArr[index].next = null;
    } else {
      linkArr[index].next = linkArr[index + 1];
    }
  }
  return linkArr;
}