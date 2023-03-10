
import { SingleLink } from "../../src/links/SingleLink";
import { linkToArray, creatCirleLink } from "../../src/util/linkUtil";

describe('链表转数组',()=>{
    test('链表转数组',()=>{
       const temp = new SingleLink([1,5,7,3,4,2]) 
       const arr = linkToArray(temp.head)
       
       expect(arr).toEqual([1,5,7,3,4,2])
    })
    test('边缘添加测试',()=>{
        const temp = new SingleLink([])
        const arr = linkToArray(temp.head)
        expect(arr).toEqual([])
    })
})
describe('生成循环链表',()=>{
    test('链表转数组', () => {
       const head = creatCirleLink([2,3,4,6,8],2)
    })
})