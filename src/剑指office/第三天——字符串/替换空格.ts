function replaceSpace(s: string): string {
    let temp = s
    while (temp.includes(' ')){
        temp =  temp.replace(' ','%20')
    }
    return temp
};
// encodeURI方法
function replaceSpace2(s: string): string {
  return s.includes(' ') ? encodeURI(s) : s
};

let s = 'i am you father'

console.log(replaceSpace2(s));
