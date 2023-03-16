
import { twoSum } from '@/labuladong的算法小抄/数组/167.两数之和 II - 输入有序数组'
describe('双指针', () => { 
    test('正常递增数组', () => { 
       const arr = [1,5,8,11,15] 
       const target = 12 
       const res = twoSum(arr,target)
       expect(res).toEqual([1,4])
     })
    test('长度为2的数组', () => { 
       const arr = [1,5] 
       const target = 6 
       const res = twoSum(arr,target)
       expect(res).toEqual([1,2])
      })

    test('有负数的数组', () => { 
       const arr = [-5,-1,0,2,13,23] 
       const target = -3 
       const res = twoSum(arr,target)
       expect(res).toEqual([1,4])
      })
 })