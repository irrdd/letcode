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

export function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    const rightArr = [...preorderTraversal(root.right)]
    const leftArr = [...preorderTraversal(root.left)]
    return [root.val, ...leftArr, ...rightArr]

};

let arr = []
export function preorderTraversal2(root: TreeNode | null): number[] {
    if (!root) return []
    // 每次执行前，都清除一边，防止副作用
    arr = []
    const trver = (root: TreeNode | null) => { 
        if(!root) return []
        arr.push(root.val)
        trver(root.left)
        trver(root.right)
     }
     trver(root)
     return arr

};