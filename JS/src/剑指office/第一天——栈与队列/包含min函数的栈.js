/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.

 */
class MinStack {
    constructor() {
        this._stack = [];
        this.$top = 0;
    }
    push(x) {
        this._stack[this.$top] = x;
        this.$top++;
    }
    pop() {
        if (this.$top <= 0) {
            return;
        }
        this.$top--;
    }
    top() {
        return this._stack[this.$top - 1];
    }
    min() {
        if (this.$top <= 0) {
            return;
        }
        let tag = this.top();
        for (let index = 0; index < this.$top; index++) {
            if (tag > this._stack[index]) {
                tag = this._stack[index];
            }
        }
        return tag;
    }
}
// 用js中的方法写
class MinStack1 {
    constructor() {
        this._stack = [];
    }
    push(x) {
        this._stack.push(x);
    }
    pop() {
        this._stack.pop();
    }
    top() {
        return this._stack[this._stack.length - 1];
    }
    min() {
        return Math.min(...this._stack);
    }
}
let minStack = new MinStack1();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min());
console.log(minStack.top());
minStack.pop();
console.log(minStack.top());
console.log(minStack.min());
