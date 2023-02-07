/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
export function isSubsequence(s: string, t: string): boolean {
    if (s.length===0)  return true 
    if (t.length===0)  return false 

    let i = 0
    while (i<s.length) {
       for (let index = 0; index < t.length; index++) {
            if (t[index]===s[i]) {
                i++
           } 
           if (index===t.length -1 && i!==s.length ) return false
       } 
       
    }
    
   return true  
};