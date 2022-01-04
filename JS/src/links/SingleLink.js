class SingleNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class SingleLink {
    constructor(data = null, next = null) {
        this.$head = new SingleNode(data, next);
        // this.$head = null;
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
        if (!node) { //node不存在，则将newNode当头节点
            newNode.next = this.$head;
            this.$head = newNode;
        }
        else {
            newNode.next = node.next;
            node.next = newNode;
        }
    }
    remove(node, rmNode) {
        // if(){
        // }
    }
    get head() {
        return this.$head;
    }
}
export default SingleLink;
