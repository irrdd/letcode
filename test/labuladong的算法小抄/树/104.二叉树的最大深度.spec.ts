import { obj2Tree } from '@/util/treeNodeUtil'
import { TreeNode } from '@/基本数据结构/二叉树'
import { maxDepth } from '@/labuladong的算法小抄/树/104.二叉树的最大深度'

describe('maxDepth', () => {
    test('正常情况下', () => {
        const obj = {
            val: 3,
            left: {
                val: 9,
                left: null,
                right: null,
            },
            right: {
                val: 20,
                left: {
                    val: 15,
                    left: null,
                    right: null,
                },
                right: {
                    val: 7,
                    left: null,
                    right: null,
                },
            },
        };
        const tree = obj2Tree(obj)
        const res = maxDepth(tree)
        expect(res).toBe(3)
    })
    test('正常情况下，只有一层', () => {
        const obj = {
            val: 3,
            left: null,
            right:null
        };
        const tree = obj2Tree(obj)
        const res = maxDepth(tree)
        expect(res).toBe(1)
    })

    test('输入是空', () => {
        const res = maxDepth(null)
        expect(res).toBe(0)
    })
})
