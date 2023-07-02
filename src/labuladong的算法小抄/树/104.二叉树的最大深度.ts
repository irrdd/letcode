/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '@/基本数据结构/二叉树'
export function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    const rightNum = maxDepth(root.right)
    const leftNum = maxDepth(root.left)
    return Math.max(rightNum, leftNum) + 1
};