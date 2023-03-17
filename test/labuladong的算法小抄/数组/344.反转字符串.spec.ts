import { reverseString } from '@/labuladong的算法小抄/数组/344.反转字符串'

describe('双指针', () => {
    test('正常字符串', () => {
        let str = [... 'qwertyuiop']
        reverseString(str)
        expect(str).toEqual([...'poiuytrewq'])
    })
    test('长度为1的数组', () => {
        let str = [...'q']
        reverseString(str)
        expect(str).toEqual([...'q'])
    })
    test('全是一样字符的字符数组', () => {
        let str = [...'eeeeeeee']
        reverseString(str)
        expect(str).toEqual([...'eeeeeeee'])
    })
    test('力扣未通过案例', () => {
        let str = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"]
        reverseString(str)
        expect(str).toEqual(["a", "m", "a", "n", "a", "P", " ", ":", "l", "a", "n", "a", "c", " ", "a", " ", ",", "n", "a", "l", "p", " ", "a", " ", ",", "n", "a", "m", " ", "A"])
    })
})