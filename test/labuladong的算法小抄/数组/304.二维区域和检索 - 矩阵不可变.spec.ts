import { NumMatrix } from '@/labuladong的算法小抄/数组/304.二维区域和检索 - 矩阵不可变'

describe('预处理', () => {
    test('正常二维数组', () => {
        const arr = [
            [3, 0, 1, 4, 2],
            [5, 6, 3, 2, 1],
            [1, 2, 0, 1, 5],
            [4, 1, 0, 1, 7],
            [1, 0, 3, 0, 5]
        ]
        const numMatrix = new NumMatrix(arr)
        expect(numMatrix.sumRegion(2, 1, 4, 3)).toEqual(8)
        expect(numMatrix.sumRegion(1, 1, 2, 2)).toEqual(11)
        expect(numMatrix.sumRegion(1, 2, 2, 4)).toEqual(12)
    })
})