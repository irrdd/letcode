export function threeSum(nums: number[]): number[][] {
  const arr: number[][] = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let index = 0; index < nums.length; index++) {
    let i = index + 1;
    let j = nums.length - 1;
    if(nums[index]===nums[index-1]) continue
    while (i < j) {
      const add = nums[i] + nums[j];
      if (add + nums[index] < 0) {
        i++;
        while (i<j&& nums[i]===nums[i-1]) {
            i++
        }
      } else if (add + nums[index] > 0) {
        j--;
        while (i<j&& nums[j]===nums[j+1]) {
            j--
        }
      } else if (add + nums[index] === 0) {
        arr.push([nums[index], nums[i], nums[j]]);
        i++
        j--
        while (i<j&& nums[j]===nums[j+1]) {
            j--
        }
        while (i<j&& nums[i]===nums[i-1]) {
            i++
        }
      }
    }
  }
  return arr;
}
