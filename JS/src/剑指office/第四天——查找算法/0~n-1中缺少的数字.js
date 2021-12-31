function missingNumber(nums) {
    if (nums[0] !== 0) {
        return 0;
    }
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index + 1] - 1) {
            return nums[index] + 1;
        }
    }
}
;
function missingNumber1(nums) {
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== index) {
            return nums[index] - 1;
        }
    }
    return nums.length;
}
;
// 二分法
function missingNumber2(nums) {
    let right = nums.length - 1;
    let left = 0;
    let midd = Math.floor((right + left) / 2);
    while (left <= right) {
        midd = Math.floor((right + left) / 2);
        if (nums[midd] !== midd) {
            right = midd - 1;
        }
        else {
            left = midd + 1;
        }
    }
    console.log(left);
    if (midd === nums.length - 1 && nums[midd] === midd) {
        return nums.length;
    }
    if (midd === nums[0]) {
        return 1;
    }
    if (midd === nums[midd]) {
        return nums[midd] + 1;
    }
    return nums[midd] - 1;
}
;
// 二分法优化
function missingNumber3(nums) {
    let right = nums.length - 1;
    let left = 0;
    let midd = Math.floor((right + left) / 2);
    while (left <= right) {
        midd = Math.floor((right + left) / 2);
        if (nums[midd] !== midd) {
            right = midd - 1;
        }
        else {
            left = midd + 1;
        }
    }
    return left;
}
;
let num1 = [0, 1, 2, 3, 4, 5, 7, 8, 9];
console.log(missingNumber3(num1));
