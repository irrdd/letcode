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

export function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;
    const maxDepth = (root: TreeNode | null) => {
        if (!root) return 0
        const rightDep = maxDepth(root.right)
        const leftDep = maxDepth(root.left)
        const diameter = rightDep + leftDep
        maxDiameter = Math.max(maxDiameter, diameter)
        return Math.max(leftDep, rightDep) + 1
    }
    maxDepth(root)
    return maxDiameter
};