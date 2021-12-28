class SingleNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class SingleLink {
    constructor(data = null, next = null) {
        // this.$head = new SingleNode(data, next);
        this.$head = null;
    }
    find(value) {
        let node = this.head;
        while (node && node.data !== value) {
            node = node.next;
        }
        return node;
    }
    // 在node后面插入newNode
    insert(node, newNode) {
        if (!node) { //node为null,即
        }
    }
    get head() {
        return this.$head;
    }
}
export default SingleLink;
