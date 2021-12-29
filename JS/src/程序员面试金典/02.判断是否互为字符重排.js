function CheckPermutation(s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;
    if (s1Len !== s2Len)
        return false;
    let s1Arr = Array.from(s1);
    let s2Arr = Array.from(s2);
    s1Arr.sort((a, b) => {
        return a.localeCompare(b);
    });
    s2Arr.sort((a, b) => {
        return a.localeCompare(b);
    });
    if (s1Arr.join('') === s2Arr.join('')) {
        return true;
    }
    else {
        return false;
    }
}
;
function CheckPermutation1(s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;
    if (s1Len !== s2Len)
        return false;
    let map1 = new Map;
    let map2 = new Map;
    for (let index = 0; index < s1Len; index++) {
        if (map1.has(s1[index])) {
            map1.set(s1[index], map1.get(s1[index]) + 1);
        }
        else {
            map1.set(s1[index], 1);
        }
        if (map2.has(s2[index])) {
            map2.set(s2[index], map2.get(s2[index]) + 1);
        }
        else {
            map2.set(s2[index], 1);
        }
    }
    for (let key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)) {
            return false;
        }
    }
    return true;
}
;
// 遍历s1字符串，在s2中寻找，存在就删掉，不存在就false，继续遍历；都存在返回true
function CheckPermutation2(s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;
    if (s1Len !== s2Len)
        return false;
    for (let index = 0; index < s1Len; index++) {
        if (s2.includes(s1[index])) {
            s2 = s2.replace(s1[index], '');
        }
        else {
            return false;
        }
    }
    return true;
}
;
let str1 = 'gfdbbacbe';
let str2 = 'adcbebefg';
console.log(CheckPermutation2(str1, str2));
