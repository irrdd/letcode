import { obj2Tree } from '@/util/treeNodeUtil'
import { invertTree, invertTree2 } from '@/labuladong的算法小抄/树/226.翻转二叉树'

describe('分解问题', () => {

    test('Example Test Case 1', () => {
        const tree = {
            val: 4,
            left: {
                val: 2,
                left: {
                    val: 1,
                    left: null,
                    right: null,
                },
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 7,
                left: {
                    val: 6,
                    left: null,
                    right: null,
                },
                right: {
                    val: 9,
                    left: null,
                    right: null,
                },
            },
        };

        const invertedTree = invertTree(tree);

        expect(invertedTree).toEqual({
            val: 4,
            left: {
                val: 7,
                left: {
                    val: 9,
                    left: null,
                    right: null,
                },
                right: {
                    val: 6,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: {
                    val: 1,
                    left: null,
                    right: null,
                },
            },
        });
    });
    test('Tree with Only Right Subtree', () => {
        const tree = {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
        };

        const invertedTree = invertTree(tree);

        expect(invertedTree).toEqual({
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: null,
        });
    });
    test('Tree with Only Left Subtree', () => {
        const tree = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: null,
        };

        const invertedTree = invertTree(tree);

        expect(invertedTree).toEqual({
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
        });
    });
    test('Tree with Only Root Node', () => {
        const tree = {
            val: 1,
            left: null,
            right: null,
        };

        const invertedTree = invertTree(tree);

        expect(invertedTree).toEqual({
            val: 1,
            left: null,
            right: null,
        });
    });
    test('Empty Tree', () => {
        const tree = null;

        const invertedTree = invertTree(tree);

        expect(invertedTree).toEqual(null);
    });

})
describe('遍历', () => {

    test('Example Test Case 1', () => {
        const tree = {
            val: 4,
            left: {
                val: 2,
                left: {
                    val: 1,
                    left: null,
                    right: null,
                },
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 7,
                left: {
                    val: 6,
                    left: null,
                    right: null,
                },
                right: {
                    val: 9,
                    left: null,
                    right: null,
                },
            },
        };

        const invertedTree = invertTree2(tree);

        expect(invertedTree).toEqual({
            val: 4,
            left: {
                val: 7,
                left: {
                    val: 9,
                    left: null,
                    right: null,
                },
                right: {
                    val: 6,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: {
                    val: 1,
                    left: null,
                    right: null,
                },
            },
        });
    });
    test('Tree with Only Right Subtree', () => {
        const tree = {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
        };

        const invertedTree = invertTree2(tree);

        expect(invertedTree).toEqual({
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: null,
        });
    });
    test('Tree with Only Left Subtree', () => {
        const tree = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: null,
            },
            right: null,
        };

        const invertedTree = invertTree2(tree);

        expect(invertedTree).toEqual({
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: null,
                },
            },
        });
    });
    test('Tree with Only Root Node', () => {
        const tree = {
            val: 1,
            left: null,
            right: null,
        };

        const invertedTree = invertTree2(tree);

        expect(invertedTree).toEqual({
            val: 1,
            left: null,
            right: null,
        });
    });
    test('Empty Tree', () => {
        const tree = null;

        const invertedTree = invertTree2(tree);

        expect(invertedTree).toEqual(null);
    });

})
