/*
 * @Author: 王东旭
 * @Date: 2022-08-02 17:02:27
 * @LastEditTime: 2022-08-02 17:27:28
 * @LastEditors: 王东旭
 * @Description: 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
 * @FilePath: /letcode/src/程序员面试金典/09.字符串轮转.ts
 *  
 */
function isFlipedString(s1: string, s2: string): boolean {
    if(s1==='') return true
    if(s1.length!==s2.length) return false
    for (let index = 0; index < s1.length; index++) {

       if (s2 === s1.substring(index)+  s1.substring(0,index) ) {
        return true
       }
    }
    return false

};