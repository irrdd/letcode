import { hasCycle } from "@/labuladong的算法小抄/链表/141. 环形链表";
import { creatCirleLink } from "@/util/linkUtil";

describe("判断是否是循环列表", () => {
  test("正常链表，是循环链表", () => {
    const arr = [1, 2, 3, 4, 5];
    const head = creatCirleLink(arr, 1);
    const res = hasCycle(head);
    expect(res).toBeTruthy();
  });
  test("只有两个节点，非循环链表", () => {
    const arr = [1, 2];
    const head = creatCirleLink(arr, -1);
    const res = hasCycle(head);
    expect(res).toBeFalsy();
  });
  test("正常链表，无循环", () => {
    const arr = [1, 2, 3, 4, 5];
    const head = creatCirleLink(arr, -1);
    const res = hasCycle(head);
    expect(res).toBeFalsy();
  });

  test("只有一个节点或无节点", () => {
    const head = creatCirleLink(1);
    const res = hasCycle(head);
    expect(res).toBeFalsy();
    const head2 = creatCirleLink(null);
    const res2 = hasCycle(head2);
    expect(res2).toBeFalsy();
  });
  test("正常链表，尾部指针指向自己", () => {
    const arr = [1, 2, 3, 4, 5];
    const head = creatCirleLink(arr, arr.length - 1);
    const res = hasCycle(head);
    expect(res).toBeTruthy();
  });
  test("正常链表，尾部指针指向头部", () => {
    const arr = [1, 2, 3, 4, 5];
    const head = creatCirleLink(arr, 0);
    const res = hasCycle(head);
    expect(res).toBeTruthy();
  });
});
