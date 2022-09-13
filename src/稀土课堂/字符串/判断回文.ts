/*
 * @Author: 王东旭
 * @Date: 2022-09-01 20:26:48
 * @LastEditTime: 2022-09-01 20:59:11
 * @LastEditors: 王东旭
 * @Description: 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @FilePath: \letcode\src\稀土课堂\字符串\判断回文.ts
 *
 */

export function isRever(str: string): boolean {
  let i = 0;
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] != str[str.length - index - 1 - i]) {
      if (i !== 0) return false;
      if (str[index + 1] === str[str.length - index - 1]) {
        i--;
      } else if (str[index] === str[str.length - index - 1]) {
        i++
      }else{
        return false
      }
    }
  }
  return true
}
