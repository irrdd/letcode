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
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
// 使用队列
function levelOrder(root) {
    if (!root)
        return [];
    let queue = [root];
    let result = [];
    while (queue.length) {
        let treenode = queue.shift();
        result.push(treenode.val);
        if (treenode.left) {
            queue.push(treenode.left);
        }
        if (treenode.right) {
            queue.push(treenode.right);
        }
    }
    return result;
}
;
