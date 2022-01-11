// 遍历删除重复字母
function firstUniqChar(s) {
    if (!s.length)
        return ' ';
    let temp = s;
    let set = new Set();
    for (let item of s) {
        if (!set.has(item)) {
            set.add(item);
        }
        else {
            temp = temp.split(item).join('');
        }
    }
    if (!temp.length) {
        return ' ';
    }
    return temp[0];
}
;
function firstUniqChar1(s) {
    if (!s.length)
        return ' ';
    let map = new Map();
    for (let item of s) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        }
        else {
            map.set(item, 1);
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) > 1) {
            map.delete(key);
        }
    }
    for (let item of s) {
        if (map.has(item)) {
            return item;
        }
    }
    return ' ';
}
;
// 队列
function firstUniqChar2(s) {
    let map = new Map();
    let query = [];
    for (let [i, value] of Array.from(s).entries()) {
        if (!map.has(value)) {
            map.set(value, i);
            query.push([s[i], i]);
        }
        else {
            map.set(value, -1);
            while (query.length && map.get(query[0][0] === -1)) {
                query.shift();
            }
        }
    }
    console.log(query);
    return query.length ? query[0][0] : ' ';
}
;
let S7 = "abaccdeff";
console.log(firstUniqChar2(S7));
