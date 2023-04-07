
export function spiralOrder(matrix: number[][]): number[] {
    const arr = []
    let left_top = 0
    let right_top = matrix[0].length -1
    let left_bottom = 0
    let right_bottom = matrix.length -1
    while (arr.length < matrix.length * matrix[0].length) {
        if (left_top <= right_bottom) {
            for (let index = left_bottom; index <= right_top; index++) {
                arr.push(matrix[left_top][index])
            }
            left_top++
        }
        if (right_top >= left_bottom) {
            for (let index = left_top; index <= right_bottom; index++) {
                arr.push(matrix[index][right_top])
            }
            right_top--
        }
        if (right_bottom >= left_top) {
            for (let index = right_top; index >= left_bottom; index--) {
                arr.push(matrix[right_bottom][index])
            }
            right_bottom--
        }
        if (left_bottom <= right_top) {
            for (let index = right_bottom; index >= left_top; index--) {
               arr.push(matrix[index][left_bottom]) 
            }
            left_bottom++
        }
    }

    return arr

};  
