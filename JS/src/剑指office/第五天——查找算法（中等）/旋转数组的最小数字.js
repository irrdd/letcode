// 排序
function minArray(numbers) {
    return numbers.sort((a, b) => a - b)[0];
}
;
// 遍历
function minArray1(numbers) {
    for (let index = 0; index < numbers.length - 1; index++) {
        if (numbers[index] > numbers[index + 1]) {
            return numbers[index + 1];
        }
    }
    return numbers[0];
}
;
// 二分法 （重点）
function minArray2(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    let midd;
    while (left < right) {
        midd = Math.floor((left + right) / 2);
        if (numbers[midd] > numbers[right]) {
            left = midd + 1;
        }
        else if (numbers[midd] < numbers[right]) {
            right = midd;
        }
        else {
            right = right - 1;
        }
    }
    return numbers[left];
}
;
let s6 = [3, 1, 3];
console.log(minArray2(s6));
