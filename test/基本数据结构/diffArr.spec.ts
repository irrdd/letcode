import { DiffArr } from "@/基本数据结构/diffArr";

describe("DiffArr", () => {
    test("test increment and getResult", () => {
      const arr = [1, 2, 3, 4, 5];
      const diffArr = new DiffArr(arr);
      diffArr.increment(1, 3, 2);
      expect(diffArr.result).toEqual([1, 4, 5, 6, 5]);
    });
  
    test("test increment and getResult with negative numbers", () => {
      const arr = [10, 20, 30, 40, 50];
      const diffArr = new DiffArr(arr);
      diffArr.increment(1, 3, -5);
      expect(diffArr.result).toEqual([10, 15, 25, 35, 50]);
    });
  
    test("test increment and getResult with empty array", () => {
      const arr: number[] = [];
      const diffArr = new DiffArr(arr);
      expect(diffArr.result).toEqual([]);
    });
  
    test("test increment and getResult with start greater than end", () => {
      const arr = [1, 2, 3, 4, 5];
      const diffArr = new DiffArr(arr);
      diffArr.increment(1, 3, -2);
      expect(diffArr.result).toEqual([1, 0, 1, 2, 5]);
    });
  });