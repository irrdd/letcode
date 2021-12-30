//用map
function canPermutePalindrome(s) {
    let map = new Map();
    let num = 0;
    for (let index = 0; index < s.length; index++) {
        if (map.has(s[index])) {
            map.set(s[index], map.get(s[index]) + 1);
        }
        else {
            map.set(s[index], 1);
        }
    }
    map.forEach((value, key) => {
        if (value % 2 === 1) {
            num++;
        }
    });
    console.log([...map]);
    return num <= 1;
}
;
// 用set
function canPermutePalindrome1(s) {
    if (!s.length) {
        return false;
    }
    let set = new Set();
    for (let i of s) {
        if (set.has(i)) {
            set.delete(i);
        }
        else {
            set.add(i);
        }
    }
    return set.size <= 1;
}
;
let s3 = 'tacctoa';
console.log(canPermutePalindrome1(s3));
