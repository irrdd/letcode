// flat
function findNumberIn2DArray(matrix, target) {
    let temp = matrix.flat(1);
    for (let index = 0; index < temp.length; index++) {
        if (temp[index] === target) {
            return true;
        }
    }
    return false;
}
;
// 逐个遍历
function findNumberIn2DArray1(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0)
        return false;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}
;
// 线性查找
function findNumberIn2DArray2(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0)
        return false;
    let len = matrix.length;
    let i = 0;
    let j = matrix[0].length - 1;
    while (i < len && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] > target) {
            j--;
        }
        if (matrix[i][j] < target) {
            i++;
        }
    }
    return false;
}
;
// 遍历+二分法
function findNumberIn2DArray3(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0)
        return false;
    for (let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix[i].length - 1;
        let midd;
        while (left <= right) {
            midd = Math.floor((right + left) / 2);
            if (matrix[i][midd] === target) {
                return true;
            }
            if (matrix[i][midd] < target) {
                left = midd + 1;
            }
            if (matrix[i][midd] > target) {
                right = midd - 1;
            }
        }
    }
    return false;
}
;
let twoArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
console.log(findNumberIn2DArray3(twoArray, 19));
