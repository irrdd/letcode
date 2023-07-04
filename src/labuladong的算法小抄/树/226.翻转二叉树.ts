export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null
    const right = invertTree(root.right)
    const left = invertTree(root.left)
    root.right = left
    root.left = right
    return root
};