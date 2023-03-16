
import { removeDuplicates } from '@/labuladong的算法小抄/数组/26.删除有序数组中的重复项'
describe('双指针', () => { 
    test('长度为2的数组', () => { 
       const arr =  [1,1]
       const res = removeDuplicates(arr)
       expect(res).toEqual(1)
     })
    test('正常递增数组', () => { 
       const arr = [1,1,3,5,5,6,15] 
       const res = removeDuplicates(arr)
       expect(res).toEqual(5)
      })

    test('有负数的数组', () => { 
       const arr = [-5,-1,-1,0,0,2,13,23,23] 
       const res = removeDuplicates(arr)
       expect(res).toEqual(6)
      })
 })