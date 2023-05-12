export function checkInclusion(s1: string, s2: string): boolean {
    if (!s1 || !s2 || s1.length > s2.length) return false
    const arr1 = new Array(26).fill(0)
    const arr2 = new Array(26).fill(0)
    for (let index = 0; index < s1.length; index++) {
        arr1[s1.charCodeAt(index) - 97]++
    }
    let left = 0
    let right = 0
    while (right < s2.length) {
        if (right - left < s1.length) {
            arr2[s2.charCodeAt(right) - 97]++
            right++
        }
        if (right - left === s1.length) {
            let flag = true
            for (let index = 0; index < 26; index++) {
                if (arr1[index] !== arr2[index]) {
                    flag = false
                    break
                }
            }
            if (flag) {
                return true;
            }
            arr2[s2.charCodeAt(left)-97]--
            left++
        }
    }
    return false
};
export function checkInclusion2(s1: string, s2: string): boolean {
    if (!s1 || !s2 || s1.length > s2.length) return false;
    const arr = new Array(26).fill(0);
    for (let index = 0; index < s1.length; index++) {
      arr[s1.charCodeAt(index) - 97]++;
    }
    let left = 0;
    let right = 0;
    let count = s1.length;
    while (right < s2.length) {
      if (arr[s2.charCodeAt(right) - 97] > 0) {
        count--;
      }
      arr[s2.charCodeAt(right) - 97]--;
      right++;
      if (count === 0) {
        return true;
      }
      if (right - left === s1.length) {
        if (arr[s2.charCodeAt(left) - 97] >= 0) {
          count++;
        }
        arr[s2.charCodeAt(left) - 97]++;
        left++;
      }
    }
    return false;
  }
  