function CheckPermutation(s1: string, s2: string): boolean {
    let s1Len = s1.length
    let s2Len = s2.length
    if (s1Len !== s2Len) return false
    let s1Arr = Array.from(s1)
    let s2Arr = Array.from(s2)
    s1Arr.sort((a,b)=>{
        return a.localeCompare(b) 
    })
    s2Arr.sort((a,b)=>{
        return a.localeCompare(b) 
    })
    if (s1Arr.join('') === s2Arr.join('')) {
        return true
    }else{
        return false
    }
    

};
function CheckPermutation1(s1: string, s2: string): boolean {
    let s1Len = s1.length
    let s2Len = s2.length
    if (s1Len !== s2Len) return false
    
    

};

let str1 = 'gfdbbacbe'
let str2 = 'adcbbbefg'

console.log(CheckPermutation(str1, str2));

