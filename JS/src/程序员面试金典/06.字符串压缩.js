// 借助map，效率低下
function compressString(S) {
    if (!S.length) {
        return S;
    }
    let s = Array.from(S);
    let map = new Map();
    let arr = [];
    let i = 0;
    for (let index = 0; index < s.length; index++) {
        if (map.size === 0) {
            map.set(s[index], 1);
            i = index;
        }
        else {
            if (map.has(s[index])) {
                map.set(s[index], map.get(s[index]) + 1);
            }
            else {
                let [value] = map;
                arr.push(...value);
                map.clear();
                map.set(s[index], 1);
                i = index;
            }
        }
        if (index === s.length - 1) {
            let [value] = map;
            arr.push(...value);
            map.clear();
        }
    }
    if (arr.length >= S.length) {
        return S;
    }
    return arr.join('');
}
;
// 双指针
function compressString2(S) {
    if (!S.length) {
        return S;
    }
    let tag = 0;
    let str = '';
    for (let index = 0; index < S.length; index++) {
        if (S[index] !== S[tag]) {
            str = str + S[tag] + `${index - tag}`;
            tag = index;
        }
        if (index === S.length - 1) {
            str = str + S[tag] + `${index - tag + 1}`;
        }
    }
    if (S.length <= str.length) {
        return S;
    }
    return str;
}
;
let s2 = "abbcccccaaa";
console.log(compressString2(s2));
