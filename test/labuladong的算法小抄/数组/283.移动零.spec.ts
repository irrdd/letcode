import { moveZeroes } from '@/labuladong的算法小抄/数组/283.移动零'


describe('双指针', () => {
    test('普通数组，含有0', () => {
        const arr = [3, 0, 2, 1, 0, 8, 0]
        moveZeroes(arr)
        expect(arr).toEqual([3, 2, 1, 8, 0, 0, 0])
    })
    test('普通数组，不含有0', () => {
        const arr = [3, 6, 2, 1, 3, 8, 9]
        moveZeroes(arr)
        expect(arr).toEqual([3, 6, 2, 1, 3, 8, 9])
    })
    test('只有一个元素的数组', () => {
        const arr = [3]
        moveZeroes(arr)
        expect(arr).toEqual([3])
    })
    test('全是0的数组', () => {
        const arr = [0, 0, 0, 0, 0, 0, 0]
        moveZeroes(arr)
        expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0])
    })
})