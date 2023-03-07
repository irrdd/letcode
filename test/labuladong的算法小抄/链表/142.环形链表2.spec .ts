import { detectCycle } from "@/labuladong的算法小抄/链表/142.环形链表2";
import { linkInArray, creatCirleLink } from "@/util/linkUtil";

describe("判断是否是循环列表", () => {
  test("正常链表，是循环链表", () => {
    const arr = [1, 2, 3, 4, 5];
    const linkArr = linkInArray(arr)
    linkArr[linkArr.length - 1].next = linkArr[1]
    const res = detectCycle(linkArr[0]);
    expect(res).toEqual(linkArr[1]);
  });
  test("只有两个节点，非循环链表", () => {
    const arr = [1, 2];
    const linkArr = linkInArray(arr)
    const res = detectCycle(linkArr[0]);
    expect(res).toBeNull();
  });
  test("正常链表，无循环", () => {
    const arr = [1, 2, 3, 4, 5];
    const linkArr = linkInArray(arr)
    const res = detectCycle(linkArr[0]);
    expect(res).toBeNull();
  });

  test("只有一个节点或无节点", () => {
    const head = creatCirleLink(1);
    const res = detectCycle(head);
    expect(res).toBeNull();
    const head2 = creatCirleLink(null);
    const res2 = detectCycle(head2);
    expect(res2).toBeNull();
  });
  test("正常链表，尾部指针指向自己", () => {
    const arr = [1, 2, 3, 4, 5];
    const linkArr = linkInArray(arr)
    linkArr[linkArr.length - 1].next = linkArr[linkArr.length - 1]
    const res = detectCycle(linkArr[0]);
    expect(res).toEqual(linkArr[linkArr.length - 1]);
  });
  test("正常链表，尾部指针指向头部", () => {
    const arr = [1, 2, 3, 4, 5];
    const linkArr = linkInArray(arr)
    linkArr[linkArr.length - 1].next = linkArr[0]
    const res = detectCycle(linkArr[0]);
    expect(res).toEqual(linkArr[0]);
  });
});