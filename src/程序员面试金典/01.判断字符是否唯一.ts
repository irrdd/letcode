function isUnique(astr: string): boolean {
    let len = astr.length
    let arrLen = [...new Set([...astr])].length
    return len ===arrLen? true: false
};
// 
function isUnique1(astr: string): boolean {
    let len = astr.length
    if (len>26) {
        return false
    }
    let arr=[]

    for (let index = 0; index < len; index++) {
        let temp = astr[index].charCodeAt(0)  -'a'.charCodeAt(0)
        if(arr[temp]) return false
        arr[temp] = astr[index]
    }
    return true

}

let str = 'qwertyyuiopasdfghjkl'

console.log(isUnique1(str));
