/*
 * @Author: 王东旭
 * @Date: 2022-08-16 10:07:57
 * @LastEditTime: 2022-08-18 22:39:27
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: \letcode\src\程序员面试金典\12.删除中间节点.ts
 *  
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};