export function removeElement(nums: number[], val: number): number {
    let left = 0
    let right = 0
    while (right < nums.length) {
        if (nums[right] === val) {
           right++
        } else {
           nums[left]=nums[right]
            right++
            left++
       }
    }
    return left


};