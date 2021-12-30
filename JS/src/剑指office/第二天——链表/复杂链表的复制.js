class randomNode {
    constructor(val, next, random) {
        this.val = (val === undefined ? [0, null] : val);
        this.next = (next === undefined ? null : next);
        this.random = (random === undefined ? null : random);
    }
}
//  使用map，空间复杂度O(n)
function copyRandomList1(head) {
    if (!head)
        return head;
    let node = head;
    let map = new Map();
    // 复制节点，将新节点放入map中
    while (node) {
        map.set(node, new randomNode(node.val));
        node = node.next;
    }
    node = head;
    //对map里的新节点进行遍历操作
    while (node) {
        map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
}
;
var tail2 = new randomNode([3, 1], null, center2);
var center2 = new randomNode([2, 0], tail2, head2);
var head2 = new randomNode([1, null], center2, null);
console.log(copyRandomList1(head2));
