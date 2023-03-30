// 差分数组

export class DiffArr {
    private diff: number[] = [];
    constructor(arr: number[]) {
        this.diff[0] = arr[0];
        for (let index = 1; index < arr.length; index++) {
            this.diff[index] = arr[index] - arr[index - 1];
        }
    }
    /* 给闭区间 [i, j] 增加 val（可以是负数）*/
    increment(i: number, j: number, val: number) {
        this.diff[i] = this.diff[i] + val;
        this.diff[j + 1] = this.diff[j + 1] - val;
    }
    // 返回结果数组
    get result() {
        const res = [];
        res[0] = this.diff[0];
        for (let index = 1; index < this.diff.length; index++) {
            res[index] = this.diff[index] + res[index - 1];
        }
        return res;
    }
}
