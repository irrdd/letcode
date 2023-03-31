import { rotate, mirrorDiagonal } from '@/labuladong的算法小抄/数组/48.旋转图像'

describe('Mirror Diagonal', () => {
    it('should mirror diagonal of a 2x2 matrix', () => {
      const matrix = [
        [1, 2],
        [3, 4]
      ];
      const expected = [
        [1, 3],
        [2, 4]
      ];
  
      mirrorDiagonal(matrix);
  
      expect(matrix).toEqual(expected);
    });
  
    it('should mirror diagonal of a 3x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ];
  
      mirrorDiagonal(matrix);
  
      expect(matrix).toEqual(expected);
    });
  
    it('should mirror diagonal of a 4x4 matrix', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ];
      const expected = [
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [4, 8, 12, 16]
      ];
  
      mirrorDiagonal(matrix);
  
      expect(matrix).toEqual(expected);
    });
  });
describe('Rotate Image', () => {
    it('should rotate the image by 90 degrees', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ];
  
      rotate(matrix);
  
      expect(matrix).toEqual(expected);
    });
  
    it('should rotate the image by 180 degrees', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
      ];
  
      rotate(matrix);
      rotate(matrix);
  
      expect(matrix).toEqual(expected);
    });
  
    it('should rotate the image by 270 degrees', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7]
      ];
  
      rotate(matrix);
      rotate(matrix);
      rotate(matrix);
  
      expect(matrix).toEqual(expected);
    });
    it('should rotate a 4x4 image by 90 degrees', () => {
        const matrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
        ];
        const expected = [
          [13, 9, 5, 1],
          [14, 10, 6, 2],
          [15, 11, 7, 3],
          [16, 12, 8, 4]
        ];
    
        rotate(matrix);
    
        expect(matrix).toEqual(expected);
      });
    
      it('should rotate a 2x2 image by 90 degrees', () => {
        const matrix = [
          [1, 2],
          [3, 4]
        ];
        const expected = [
          [3, 1],
          [4, 2]
        ];
    
        rotate(matrix);
    
        expect(matrix).toEqual(expected);
      });
  });