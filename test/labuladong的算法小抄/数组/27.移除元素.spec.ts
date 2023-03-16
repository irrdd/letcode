import { removeElement } from '@/labuladong的算法小抄/数组/27.移除元素'
describe('双指针', () => {
    test('长度为2的数组', () => {
        const arr = [1, 1]
        const num = 1
        const res = removeElement(arr, num)
        expect(res).toEqual(0)
    })
    test('正常递增数组', () => {
        const arr = [1, 1, 3, 5, 5, 6, 15]
        const num = 5
        const res = removeElement(arr, num)
        expect(res).toEqual(5)
    })

    test('有负数的数组', () => {
        const arr = [-5, -1, -1, 0, 0, 2, 13, 23, 23]
        const num = 0
        const res = removeElement(arr, num)
        expect(res).toEqual(7)
    })

    test('非递增数组', () => {
        const arr = [3, 2, 2, 3]
        const num = 3
        const res = removeElement(arr, num)
        expect(res).toEqual(2)
    })
    test('非递增数组,切第一个不删除', () => {
        const arr = [3, 2, 2, 1]
        const num = 2
        const res = removeElement(arr, num)
        expect(res).toEqual(2)
    })
    test('非递增数组,切不重复', () => {
        const arr = [3, 2, 6, 0, 5]
        const num = 3
        const res = removeElement(arr, num)
        expect(res).toEqual(4)
    })
})