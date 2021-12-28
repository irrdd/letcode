/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
// 初始版本
class CQueue {
    constructor() {
        this.arrIn = [];
        this.arrOut = [];
    }
    appendTail(value) {
        this.arrIn.push(value);
    }
    deleteHead() {
        if (this.arrIn.length === 0) {
            return -1;
        }
        let arrInLength = this.arrIn.length;
        for (let i = 0; i < arrInLength; i++) {
            this.arrOut.push(this.arrIn.pop());
        }
        let temp = this.arrOut.pop();
        let arrOutLength = this.arrOut.length;
        for (let i = 0; i < arrOutLength; i++) {
            this.arrIn.push(this.arrOut.pop());
        }
        return temp;
    }
}
// 优化：arrOut中只要不为空，可继续弹出，
class CQueue1 {
    constructor() {
        this.arrIn = [];
        this.arrOut = [];
    }
    appendTail(value) {
        this.arrIn.push(value);
    }
    deleteHead() {
        if (!this.arrOut.length) {
            while (this.arrIn.length) {
                this.arrOut.push(this.arrIn.pop());
            }
        }
        return this.arrOut.length ? this.arrOut.pop() : -1;
    }
}
let obj = new CQueue1();
obj.appendTail(2);
obj.appendTail(3);
console.log(obj.deleteHead());
obj.appendTail(4);
console.log(obj.deleteHead());
obj.appendTail(5);
console.log(obj.deleteHead());
obj.appendTail(6);
console.log(obj.deleteHead());
console.log(obj.deleteHead());
