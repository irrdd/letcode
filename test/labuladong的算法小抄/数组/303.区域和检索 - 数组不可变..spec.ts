import { NumArray } from '@/labuladong的算法小抄/数组/303.区域和检索 - 数组不可变'

describe('预计算的方式', () => {
    test('正常数组', () => {
        const arr = [1, 5, 2, 4, 8, 9, 0, -3]
        const numArray = new NumArray(arr)
        const res = numArray.sumRange(0, 2)
        expect(res).toEqual(8)
        const res2 = numArray.sumRange(3,5)
        expect(res2).toEqual(21)
        const res3 = numArray.sumRange(0, 7)
        expect(res3).toEqual(26)
        const res4 = numArray.sumRange(3, 3)
        expect(res4).toEqual(4)
        const res5 = numArray.sumRange(6, 7)
        expect(res5).toEqual(-3)
    })
}
)