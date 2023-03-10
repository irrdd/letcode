/*
 * @Author: 王东旭
 * @Date: 2022-08-22 21:50:41
 * @LastEditTime: 2022-08-22 22:45:01
 * @LastEditors: 王东旭
 * @Description: 树的相关方法测试
 * @FilePath: \letcode\test\util\treeNodeUtil.spec.ts
 *
 */

import { TreeNode } from "@/基本数据结构/二叉树";
import { obj2Tree, preOrder, inorder , postorder} from "@/util/treeNodeUtil";

function creatTree(): TreeNode {
  const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D",
      },
      right: {
        val: "E",
      },
    },
    right: {
      val: "C",
      right: {
        val: "F",
      },
    },
  };
  return obj2Tree(root);
}

test("树形对象转真正的二叉树", () => {
  const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D",
      },
      right: {
        val: "E",
      },
    },
    right: {
      val: "C",
      right: {
        val: "F",
      },
    },
  };
  const tree = obj2Tree(root);
});

test("先序遍历树", () => {
  const tree = creatTree();
  const arr = preOrder(tree);
  expect(arr).toEqual(["A", "B", "D", "E", "C", "F"]);
});

test("中序遍历树", () => {
  const tree = creatTree();
  const arr = inorder(tree);
  expect(arr).toEqual(['D','B','E','A','C','F'])
});

test("后序遍历树", () => {
  const tree = creatTree();
  const arr = postorder(tree);
  expect(arr).toEqual(['D','E','B','F','C','A'])
});
test('空数组遍历',()=>{
  const arr = postorder(null)
  expect(arr).toEqual([])
})