import { obj2Tree } from '@/util/treeNodeUtil'
import { TreeNode } from '@/基本数据结构/二叉树'
import { diameterOfBinaryTree } from '@/labuladong的算法小抄/树/543.二叉树的直径'

describe('二叉树的直径', () => {
    test('只有右子树', () => {
        const root = {
            val: 1,
            left: null,
            right: {
                val: 2,
                right: {
                    val: 3,
                    left: null,
                    right: null
                },
                left: null
            }
        };
        const tree = obj2Tree(root)
        const res = diameterOfBinaryTree(tree)
        expect(res).toBe(2)
    })

    test('正常情况下', () => {
        const root = {
            val: 1,
            right: {
                val: 3,
                left: null,
                right: null
            },
            left: {
                val: 2,
                left: {
                    val: 4,
                    left: null,
                    right: null
                },
                right: {
                    val: 5,
                    left: null,
                    right: null
                }
            }
        };
        const tree = obj2Tree(root)
        const res = diameterOfBinaryTree(tree)
        expect(res).toBe(3)
    })
})