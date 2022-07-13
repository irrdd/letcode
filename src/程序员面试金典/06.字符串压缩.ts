// 借助map，效率低下
function compressString(S: string): string {
    if (!S.length) {
        return S
    }
    let s = Array.from(S)
    let map = new Map<string, number>();
    let arr = []
    let i = 0;
    for (let index = 0; index < s.length; index++) {
        if (map.size === 0) {
            map.set(s[index], 1)
            i = index
        } else {

            if (map.has(s[index])) {
                map.set(s[index], map.get(s[index]) + 1)
            } else {
                let [value] = map
                arr.push(...value)
                map.clear()
                map.set(s[index], 1)
                i = index
            }
        }
        if (index === s.length - 1) {
            let [value] = map
            arr.push(...value)
            map.clear()
        }

    }
    if (arr.length >= S.length) {
        return S
    }

    return arr.join('')
};
// 双指针
function compressString2(S: string): string {
    if (!S.length) {
        return S
    }
    let tag = 0
    let str = ''
    for (let index = 0; index < S.length; index++) {
        if (S[index] !== S[tag]) {
            str = str + S[tag] + `${index - tag}`
            tag = index

        }
        if (index === S.length - 1) {
            str = str + S[tag] + `${index - tag + 1}`
        }
    }
    if (S.length <= str.length) {
        return S
    }
    return str
};
// 单次循环
function compressString3(S: string): string {
    if(S.length<2) return S
    let str='',i=0,temp=''
    for (let index = 0; index < S.length; index++) {
        if (temp===S[index]) {
          i++
        }else{
          if (i===0) {
          str = str+temp
            
          }else{
            str = str+temp+i
          }
          
          temp = S[index]
          i=1
        }
        if (index === S.length-1) {
          str=str+temp+i
        }
    }
    return str.length>=S.length? S:str
  };
let s2 = "abbcccccaaa"

console.log(compressString2(s2));
