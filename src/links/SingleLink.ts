import Link from "../../type/link";
export class SingleNode implements Link {
    public data: unknown
    public next: SingleNode
    constructor(data: unknown, next: SingleNode) {
        this.data = data;
        this.next = next;
    }


}
export class SingleLink {
    private $head: SingleNode | null//头节点
    private $pre : SingleNode| null //指针
    constructor(arr:unknown[]| null) {
        if(arr.length === 0 || !arr) this.$head = new SingleNode(null,null)
        arr.forEach((value,index)=>{
            if (index === 0) {
                this.$head = new SingleNode(value,null)
                this.$pre= this.$head
            }
             this.$pre.next  = new SingleNode(value,null)
             this.$pre = this.$pre.next
        })
        
    }
    find(value: unknown): SingleNode {
        let node = this.head
        while (node && node.data !== value) {
            node = node.next
        }
        return node
    }
    // 在node后面插入newNode
    insert(node: SingleNode, newNode: SingleNode):void {
        if (!node) { //node不存在，则将newNode当头节点
            newNode.next = this.$head
            this.$head = newNode
        }  else {
            newNode.next = node.next
            node.next = newNode
        }
    }
    remove(node: SingleNode,rmNode: SingleNode): void {
        // if(){

        // }
    }
    get head() {
        return this.$head;
    }
}
export default SingleLink