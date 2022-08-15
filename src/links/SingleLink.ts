import Link from "../../type/link";
export class ListNode implements Link {
    public val: unknown
    public next: ListNode
    constructor(val: unknown, next: ListNode) {
        this.val = val;
        this.next = next;
    }


}
export class SingleLink {
    private $head: ListNode | null//头节点
    private $pre : ListNode| null //指针
    constructor(arr:unknown[]| null) {
        if(arr.length === 0 || !arr) this.$head = new ListNode(null,null)
        arr.forEach((value,index)=>{
            if (index === 0) {
                this.$head = new ListNode(value,null)
                this.$pre= this.$head
            }
             this.$pre.next  = new ListNode(value,null)
             this.$pre = this.$pre.next
        })
        
    }
    find(value: unknown): ListNode {
        let node = this.head
        while (node && node.val !== value) {
            node = node.next
        }
        return node
    }
    // 在node后面插入newNode
    insert(node: ListNode, newNode: ListNode):void {
        if (!node) { //node不存在，则将newNode当头节点
            newNode.next = this.$head
            this.$head = newNode
        }  else {
            newNode.next = node.next
            node.next = newNode
        }
    }
    remove(node: ListNode,rmNode: ListNode): void {
        // if(){

        // }
    }
    get head() {
        return this.$head;
    }
}
export default SingleLink