/*
 * @Author: 王东旭
 * @Date: 2022-08-22 21:40:59
 * @LastEditTime: 2022-08-22 21:43:24
 * @LastEditors: 王东旭
 * @Description: 二叉树数据结构
 * @FilePath: \letcode\src\基本数据结构\二叉树.ts
 *  
 */

export class TreeNode {
    val: any
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: any, left?: TreeNode | null, right?: TreeNode | null) {
        this.left = left
        this.right = right
        this.val = val
    }
}
