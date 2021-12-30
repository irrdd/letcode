// 数组法
function reverseLeftWords(s: string, n: number): string {
    let arr = Array.from(s)
    let temp = []
    temp = arr.splice(0,n)
    arr = arr.concat(temp)
    return arr.join('')
};
// slice
function reverseLeftWords2(s: string, n: number): string {
    let temp = s.slice(n)
    let temp2 = s.slice(0,n)
    return temp+temp2
};
// substring
function reverseLeftWords3(s: string, n: number): string {
    let temp = s.substring(n)
    let temp2 = s.substring(0,n)
    return temp+temp2
};

// substr
function reverseLeftWords4(s: string, n: number): string {
    let temp = s.substr(n)
    let temp2 = s.substr(0,n)
    return temp+temp2
};

let s1 = 'abcdefg'
console.log(reverseLeftWords3(s1,3));
 