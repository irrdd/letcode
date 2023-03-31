/**
 * Do not return anything, modify matrix in-place instead.
 * 顺时针旋转90度
 */

/**
 * 
 * [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]

      [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ]
 */

export function rotate(matrix: number[][]): void {
    mirrorDiagonal(matrix)
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i]
        let n = 0
        let m = element.length -1 
        while (n<m) {
           const temp = element[n]
           element[n] = element[m]
           element[m] = temp
            n++
            m--
        }
    }

};
// 左上到右下的对角线镜像对称

export function mirrorDiagonal(matrix: number[][]): void {
    const len = matrix.length
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
}