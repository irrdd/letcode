/*
 * @Author: 王东旭
 * @Date: 2022-08-23 10:22:16
 * @LastEditTime: 2022-08-23 11:01:38
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: /letcode/test/稀土课堂/数组/两数求和.spec.ts
 *  
 */

import { twoNumAdd ,twoNumAdd2} from "@/稀土课堂/数组/两数求和";

test('使用双循环',()=>{
   const num = [2,7,11,15]
   const res = twoNumAdd(num,17)
   expect(res).toEqual([0,3])
   expect(twoNumAdd(num,9)).toEqual([0,1])
   expect(twoNumAdd(num,18)).toEqual([1,2])
   expect(twoNumAdd(num,26)).toEqual([2,3])
})
test('使用map',()=>{
   const num = [2,7,11,15]
   const res = twoNumAdd2(num,17)
   expect(res).toEqual([0,3])
   expect(twoNumAdd2(num,9)).toEqual([0,1])
   expect(twoNumAdd2(num,18)).toEqual([1,2])
   expect(twoNumAdd2(num,26)).toEqual([2,3])
})