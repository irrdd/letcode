/**
 * 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）
 * 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi]
 * 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。
 * 这些位置是从汽车的初始位置向东的公里数。
 * 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。
 */

import { DiffArr } from "@/基本数据结构/diffArr"

export function carPooling(trips: number[][], capacity: number): boolean {
    const arr:number[] = []
    for (let index = 0; index < trips.length; index++) {
       if(capacity < trips[index][0]) return false 
        for (let j = trips[index][1]; j < trips[index][2]; j++) {
            const one = arr[j] || 0
            const two = trips[index][0]
            arr[j] =one  +  two
            if(arr[j]> capacity) return false 
       }
    }
    return true
};
// 差分数组
export function carPooling2(trips: number[][], capacity: number): boolean {
    const arr:number[] = new Array(1001).fill(0)
    const diff = new DiffArr(arr)
    for (let index = 0; index < trips.length; index++) {
       if(capacity < trips[index][0]) return false 
       diff.increment(trips[index][1],trips[index][2] - 1,trips[index][0])
    }
    const res = diff.result
    for (const value of res) {
       if(value > capacity) return false 
    }
    return true
};