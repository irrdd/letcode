/*
 * @Author: 王东旭
 * @Date: 2022-08-22 21:43:49
 * @LastEditTime: 2022-08-22 22:37:52
 * @LastEditors: 王东旭
 * @Description: 树相关方法
 * @FilePath: \letcode\src\util\treeNodeUtil.ts
 *
 */
interface treeObject {
  val: any;
  left?: treeObject | null;
  right?: treeObject | null;
}

import { TreeNode } from "@/基本数据结构/二叉树";
/**
 * @description: 树形对象转真正的二叉树
 * @param {treeObject} obj
 * @return {TreeNode} 返回的二叉树
 */
export function obj2Tree(obj: treeObject | null): TreeNode {
  if (!obj) return null;
  const root = new TreeNode(obj.val);
  root.left = obj2Tree(obj.left);
  root.right = obj2Tree(obj.right);
  return root;
}
/**
 * @description: 先序遍历
 * @param {TreeNode} root
 * @return {any[] | null} 遍历后的数组
 */
export function preOrder(root: TreeNode | null): any[] {
  const arr = [];
  const order = (tree: TreeNode | null) => {
    if (!tree) return;
    arr.push(tree.val);
    order(tree.left);
    order(tree.right);
  };
  order(root);
  return arr;
}

/**
 * @description: 中序遍历
 * @param {TreeNode} root
 * @return {*}
 */
export function inorder(root: TreeNode | null): any[] {
  const arr = [];
  const order = (tree: TreeNode | null) => {
    if (!tree) return;
    order(tree.left);
    arr.push(tree.val);
    order(tree.right);
  };
  order(root);
  return arr;
}

export function postorder(root: TreeNode | null): any[] {
  const arr = [];
  const order = (tree: TreeNode | null) => {
    if (!tree) return;
    order(tree.left);
    order(tree.right);
    arr.push(tree.val);
  };
  order(root);
  return arr;
}
