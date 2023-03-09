import { getIntersectionNode2 as  getIntersectionNode} from "@/labuladong的算法小抄/链表/160.相交链表";
import { ListNode, SingleLink } from "@/links/SingleLink";
import { linkInArray } from "@/util/linkUtil";


const setLink = (arr1: number[], arr2: number[], pos: number): { resLink: ListNode | null, posLink: ListNode | null } => {
    const linkArr1 = linkInArray(arr1);
    const linkArr2 = linkInArray(arr2);
    let posLink: ListNode | null;
    if (pos < linkArr1.length && pos > -1) {
        linkArr2[linkArr2.length - 1].next = linkArr1[pos];
        posLink = linkArr1[pos]
    } else {
        posLink = null;
    }
    const resLink = getIntersectionNode(linkArr1[0], linkArr2[0]);
    return { resLink, posLink }
}

describe("判断是否是相交列表", () => {
    /**
     *    1->2->3->4->5->null
     *          ^
     *          |
     *    7->8->9
     */
    test("正常链表，相交", () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [7, 8, 9];
        const pos = 2;
        const { resLink, posLink } = setLink(arr1, arr2, pos)
        expect(resLink).toEqual(posLink);
    });
    /**
       *    1->2->3->4->5->null
       *          
       *          
       *    7->8->9-null
       */
    test("正常链表，不相交", () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [7, 8, 9];
        const pos = -1;
        const { resLink, posLink } = setLink(arr1, arr2, pos)
        expect(resLink).toEqual(posLink);
    });
    /**
   *    1->2->3->4->5->null
   *                ^
   *                |
   *          7->8->9
   */
    test("正常链表，相交相交于尾节点", () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [7, 8, 9];
        const pos = arr1[arr1.length - 1];
        const { resLink, posLink } = setLink(arr1, arr2, pos)
        expect(resLink).toEqual(posLink);
    });
    /**
   *    1->2->3->4->5->null
   *       ^
   *       |
   * 7->8->9
   */
    test("正常链表，相交于第二个节点", () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [7, 8, 9];
        const pos = 1;
        const { resLink, posLink } = setLink(arr1, arr2, pos)
        expect(resLink).toEqual(posLink);
    });
    /**
    *   1->null
    *       
    *       
    *   2->null
    */
    test("两个链表只有头节点，不相交", () => {
        const arr1 = [1];
        const arr2 = [2];
        const pos = -1;
        const { resLink, posLink } = setLink(arr1, arr2, pos)
        expect(resLink).toEqual(posLink);
    });
    /**
  * A->1->null
  *    ^   
  *    |   
  *    B
  */
    test("两个链表共用头节点，相交", () => {
        const headA = new ListNode(1, null)
        const headB = headA
        const res = getIntersectionNode(headA, headB)
        expect(res).toEqual(headA)
    });

});
