/*
 * @Author: 王东旭
 * @Date: 2022-08-23 10:22:16
 * @LastEditTime: 2022-08-23 10:57:59
 * @LastEditors: 王东旭
 * @Description:  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @FilePath: /letcode/src/稀土课堂/数组/两数求和.ts
 *  
 */
// 双层循环
export function twoNumAdd(arr:number[],target:number):number[]{
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
         if(arr[i]+arr[j] === target){
            return [i,j]
         } 
       } 
    }
}

// 使用map
export function twoNumAdd2(arr:number[],target):number[]{
    const map = new Map()
    for (let index = 0; index < arr.length; index++) {
       if(map.has(target-arr[index])) {
        return [map.get(target-arr[index]),index]
       }else{
        map.set(arr[index],index)
       }
    }
}