// 分解问题
export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null
    const right = invertTree(root.right)
    const left = invertTree(root.left)
    root.right = left
    root.left = right
    return root
};

// 遍历
export function invertTree2(root: TreeNode | null): TreeNode | null {
    const traverse = (root: TreeNode | null) => {
        if (!root) return null
        traverse(root.left)
        traverse(root.right)
        const temp = root.left
        root.left = root.right
        root.right = temp
    }
    traverse(root)
    return root
};