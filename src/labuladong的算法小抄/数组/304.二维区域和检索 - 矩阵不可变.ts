/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export class NumMatrix {
    private proArr: number[][]
    constructor(matrix: number[][]) {
        let m = matrix.length
        let n = matrix[0].length
        if (m === 0 || n === 0) return
        this.proArr = new Array(m + 1).fill(null).map(() => { 
            return new Array(n+1).fill(0)
         })
        for (let i = 1; i < m + 1; i++) {
            for (let j = 1; j < n + 1; j++) {
                this.proArr[i][j] = this.proArr[i - 1][j] + this.proArr[i][j - 1]
                    + matrix[i - 1][j - 1] - this.proArr[i - 1][j - 1]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.proArr[row2 + 1][col2 + 1] - this.proArr[row2 + 1][col1]
            - this.proArr[row1][col2 + 1] + this.proArr[row1][col1]
    }
}