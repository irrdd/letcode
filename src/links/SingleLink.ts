import Link from "../../type/link";
class SingleNode implements Link {
    public data: unknown
    public next: SingleNode
    constructor(data: unknown, next: SingleNode) {
        this.data = data;
        this.next = next;
    }


}
class SingleLink {
    private $head: SingleNode //头节点
    constructor(data: unknown = null, next: SingleNode = null) {
        this.$head = new SingleNode(data, next);
    }
    find(value: unknown): SingleNode {
        let node = this.head
        while (node && node.data !== value) {
            node = node.next
        }
        return node
    }
    // 在node后面插入newNode
    insert(node: SingleNode, newNode: SingleNode) {
        if (!node) { //node为null,即

        }
    }
    get head() {
        return this.$head;
    }
}
export default SingleLink