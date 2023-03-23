import { carPooling } from '@/labuladong的算法小抄/数组/1094.拼车'

describe('引用额外数组求和', () => {
    test('空位不够，不能接送', () => {
        const trips = [[2, 1, 5], [3, 3, 7]]
        const capacity = 4
        const res = carPooling(trips,capacity)
        expect(res).toBeFalsy()
    })
    test('空位够，能接送', () => {
        const trips = [[2, 1, 5], [3, 3, 7]]
        const capacity = 5
        const res = carPooling(trips,capacity)
        expect(res).toBeTruthy()
    })
    test('空位不够，能接送', () => {
        const trips = [[2, 1, 3], [3, 3, 7]]
        const capacity = 4
        const res = carPooling(trips,capacity)
        expect(res).toBeTruthy()
    })
    test('空位够，但只有一程', () => {
        const trips = [[2, 1, 5]]
        const capacity = 4
        const res = carPooling(trips,capacity)
        expect(res).toBeTruthy()
    })
    test('空位不够，只有一程，不能接送', () => {
        const trips = [[5, 1, 5]]
        const capacity = 4
        const res = carPooling(trips,capacity)
        expect(res).toBeFalsy()
    })
    test('空位不够，有多程,能接送', () => {
        const trips = [[2, 1, 3], [3, 3, 7],[1,5,9]]
        const capacity = 4
        const res = carPooling(trips,capacity)
        expect(res).toBeTruthy()
    })
    test('空位不够，有多程, 不能接送', () => {
        const trips = [[2, 1, 3], [3, 3, 7],[3,4,5]]
        const capacity = 4
        const res = carPooling(trips,capacity)
        expect(res).toBeFalsy()
    })
})