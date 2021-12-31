/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    let arr = JSON.parse(JSON.stringify(matrix));
    if (matrix.length === 0)
        return;
    if (matrix.length !== matrix[0].length)
        return;
    for (let j = 0; j < matrix.length; j++) {
        for (let i = matrix.length - 1; i >= 0; i--) {
            arr[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }
    matrix = JSON.parse(JSON.stringify(arr));
    console.log(matrix);
}
;
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix);
