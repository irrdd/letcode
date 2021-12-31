// 哈希map
function findRepeatNumber(nums: number[]): number {
    if (!nums.length) {
        return
    }
    let map = new Map();
    for (let item of nums) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)

        } else {
            map.set(item, 1)
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) > 1) {
            return key
        }
    }
}; 
// 哈希map 优化
function findRepeatNumber3(nums: number[]): number {
    if (!nums.length) {
        return
    }
    let map = new Map();
    for (let item of nums) {
        if (map.has(item)) {
            return item

        } else {
            map.set(item, 1)
        }
    }
    
};
// 排序
function findRepeatNumber1(nums: number[]): number {
    if (!nums.length) {
        return
    }
   nums.sort()
   for (let index = 0; index < nums.length; index++) {
       if (nums[index] === nums[index+1]) {
           return nums[index]
       }
       
   }
   
};
// includes 性能低下
function findRepeatNumber2(nums: number[]): number {
    if (!nums.length) {
        return
    }
    let arr: number[]= []
   for (let index = 0; index < nums.length; index++) {
       if (arr.includes(nums[index])) {
           return nums[index]
       }else{
           arr.push(nums[index])
       }
       
   }
   
};


let nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber3(nums));
