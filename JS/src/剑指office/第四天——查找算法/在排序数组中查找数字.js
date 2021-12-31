// 遍历法
function search(nums, target) {
    let sum = 0;
    for (let item of nums) {
        if (item === target) {
            sum++;
        }
    }
    return sum;
}
;
// 二分查找法
function search1(nums, target) {
    let high = nums.length - 1;
    let midd = Math.floor(high / 2);
    let low = 0;
    let sum = 0;
    while (low <= high) {
        midd = Math.floor((high + low) / 2);
        if (nums[midd] === target) {
            sum++;
            break;
        }
        if (nums[midd] < target) {
            low = midd + 1;
        }
        else {
            high = midd - 1;
        }
    }
    let i = 1;
    while (nums[midd - i] === target || nums[midd + i] === target) {
        if (nums[midd - i] === target) {
            sum++;
        }
        if (nums[midd + i] === target) {
            sum++;
        }
        i++;
    }
    return sum;
}
;
let s5 = [5, 7, 7, 8, 8, 10];
console.log(search1(s5, 8));
