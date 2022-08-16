/*
 * @Author: 王东旭
 * @Date: 2022-08-16 11:04:13
 * @LastEditTime: 2022-08-16 11:11:57
 * @LastEditors: 王东旭
 * @Description: 链表的相关方法
 * @FilePath: /letcode/src/util/linkUtil.ts
 *  
 */
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