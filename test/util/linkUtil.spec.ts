
import { SingleLink } from "../../src/links/SingleLink";
import { linkToArray } from "../../src/util/linkUtil";

describe('链表的相关方法',()=>{
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