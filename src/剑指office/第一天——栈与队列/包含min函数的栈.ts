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
    private _stack: number[]
    private $top: number
    constructor() {
        this._stack = [];
        this.$top = 0
    }

    push(x: number): void {
        this._stack[this.$top] = x
        this.$top++
    }

    pop(): void {
        if (this.$top <= 0) {
            return
        }
        this.$top--
    }

    top(): number {
        return this._stack[this.$top - 1]
    }

    min(): number {
        if (this.$top <= 0) {
            return
        }
        let tag: number = this.top()
        for (let index = 0; index < this.$top; index++) {
            if (tag > this._stack[index]) {
                tag = this._stack[index]
            }
        }
        return tag
    }
}
// 用js中的方法写
class MinStack1 {
    private _stack: number[]

    constructor() {
        this._stack = [];

    }

    push(x: number): void {
        this._stack.push(x);
    }

    pop(): void {
        this._stack.pop();
    }

    top(): number {
        return this._stack[this._stack.length - 1]
    }

    min(): number {
        return Math.min(...this._stack)
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

