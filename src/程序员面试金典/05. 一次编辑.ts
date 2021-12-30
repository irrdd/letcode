
// 有瑕疵，速度慢
function oneEditAway1(first: string, second: string): boolean {
    let max = first.length >= second.length ? first : second;
    let min = first.length >= second.length ? second : first;
    let map1 = new Map();
    let map2 = new Map();
    let sum = 0

    let sum1 = 0
    if (max.length - min.length > 1) return false;
    // 替换操作
    if (first.length === second.length) {
        for (let index = 0; index < first.length; index++) {
            if (first[index] !== second[index]) {
                sum++
            }
        }
        return sum <= 1
    }
    // 插入删除操作
    for (let index = 0; index < min.length; index++) {
        if (map1.has(min[index])) {
            map1.set(min[index], map1.get(min[index]) + 1)
        } else {
            map1.set(min[index], 1)
        }
        if (map2.has(max[index])) {
            map2.set(max[index], map2.get(max[index]) + 1)
        } else {
            map2.set(max[index], 1)
        }
    }
    if (map2.has(max[max.length - 1])) {
        map2.set(max[max.length - 1], map2.get(max[max.length - 1]) + 1)

    } else {
        map2.set(max[max.length - 1], 1)
    }

    for (let key of map1.keys()) {

        if (map1.get(key) !== map2.get(key)) {
            sum1++
        }
        map2.delete(key)

    }
    if (map2.size > 1) {
        return false
    }
    return sum1 <= 1

};
function oneEditAway(first: string, second: string): boolean {
    let max = first.length >= second.length ? first : second;
    let min = first.length >= second.length ? second : first;
    let tag = -1
    let sum = 0
    if (max.length - min.length > 1) return false;
    // 替换操作
    if (max.length === min.length) {
        for (let index = 0; index < min.length; index++) {
            if (max[index] !== min[index]) {
                sum++
            }
        }
        return sum <= 1
    }
    // 插入删除操作
    for (let index = 0; index < min.length; index++) {
        if (max[index] !== min[index]) {
            tag = index
            break;
        }
    }
    if (tag === -1) return true
    let temp1 = max.substring(tag+1)
    if (temp1 === '') return true
    let temp2 = min.substring(tag)
    return temp1 === temp2
};
let first = "teacher"
let second = "treacher"
console.log(oneEditAway(first, second));
