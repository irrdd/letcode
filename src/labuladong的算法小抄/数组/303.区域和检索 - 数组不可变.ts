
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

export class NumArray {
    private proArr: number[]=[]
    constructor(nums: number[]) {
        this.proArr[0] = 0
        for (let index = 1; index <= nums.length; index++) {
            this.proArr[index] = this.proArr[index - 1] + nums[index - 1]
        }
    }

    sumRange(left: number, right: number): number {
        return this.proArr[right+1] - this.proArr[left]

    }
}