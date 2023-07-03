import { obj2Tree } from '@/util/treeNodeUtil'
import { TreeNode } from '@/基本数据结构/二叉树'
import { preorderTraversal, preorderTraversal2 } from '@/labuladong的算法小抄/树/144.二叉树的前序遍历'

describe('不使用作用域外的变量', () => {
    test('Example Test Case 2', () => {
        const root = {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null
                },
                right: null
            }
        };

        const expected = [1, 2, 3];
        const tree = obj2Tree(root)
        const result = preorderTraversal(tree);

        expect(result).toEqual(expected);
    });

    test('Example Test Case 2', () => {
        const root = null;
        const expected: number[] = [];
        const tree = obj2Tree(root)
        const result = preorderTraversal(tree);

        expect(result).toEqual(expected);
    });
})
describe('使用作用域外的变量', () => {

    test('Example Test Case 2', () => {
        const root = {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null
                },
                right: null
            }
        };

        const expected = [1, 2, 3];
        const tree = obj2Tree(root)
        const result = preorderTraversal2(tree);

        expect(result).toEqual(expected);
    });

    test('Example Test Case 2', () => {
        const root = null;
        const expected: number[] = [];
        const tree = obj2Tree(root)
        const result = preorderTraversal2(tree);

        expect(result).toEqual(expected);
    });
})