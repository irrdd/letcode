/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const temp: number[][] = [];
  matrix.forEach((arr, i) => {
    arr.forEach((item, j) => {
      if (item === 0) {
        const indexList = [i, j];
        temp.push(indexList);
      }
    });
  });
  temp.forEach((item) => {
    matrix[item[0]].fill(0);
    matrix.forEach((arr) => {
      arr[item[1]] = 0;
    });
  });
}
