import { spiralOrder } from '@/labuladong的算法小抄/数组/54.螺旋矩阵'

describe('Spiral Matrix', () => {
    it('should return the elements of a 3x3 matrix in spiral order', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
  
      const result = spiralOrder(matrix);
  
      expect(result).toEqual(expected);
    });
  
    it('should return the elements of a 4x5 matrix in spiral order', () => {
      const matrix = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
      ];
      const expected = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12];
  
      const result = spiralOrder(matrix);
  
      expect(result).toEqual(expected);
    });
  
    it('should return the elements of a 2x2 matrix in spiral order', () => {
      const matrix = [
        [1, 2],
        [3, 4]
      ];
      const expected = [1, 2, 4, 3];
  
      const result = spiralOrder(matrix);
  
      expect(result).toEqual(expected);
    });
  });