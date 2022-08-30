import { threeSum } from "@/稀土课堂/数组/三数求和";

test("三数之和", () => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const res = threeSum(nums);
  console.log(res);
  console.log(res);

  expect(res).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
test("三数之和", () => {
  const nums = [0, 1, 1];
  const res = threeSum(nums);
  console.log(res);
  console.log(res);

  expect(res).toEqual([]);
});
test("三数之和", () => {
  const nums = [0, 0, 0];
  const res = threeSum(nums);
  console.log(res);
  console.log(res);

  expect(res).toEqual([[0, 0, 0]]);
});
test("三数之和", () => {
  const nums =[-2,0,0,2,2];
  const res = threeSum(nums);
  console.log(res);

  expect(res).toEqual([[-2, 0, 2]]);
});