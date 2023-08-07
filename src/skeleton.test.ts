import  sum,  {returnLastNumberInArray,
   returnFirstNumberInArray,
   returnSmallerOfTwoNumbers,
   findAndReturnMinAndMax,
   reverseAString
  } from "./skeleton";

test("sum adds two numbers", () => {
  expect(sum(4, 3)).toBe(7);
});

test("returns first number from array", () => {
  expect(returnFirstNumberInArray([1,25,54,3])).toBe(1);
});

test("returns last number from array", () => {
  expect(returnLastNumberInArray([1,25,54,3])).toBe(3);
});

test("returns smaller of 2 numbers", () => {
  expect(returnSmallerOfTwoNumbers(5,10)).toBe(5);
});
test("returns min and max from array", () => {
  expect(findAndReturnMinAndMax([6,5,1,100])).toEqual({min:1,max:100});
});
test("reverses a string", () => {
  expect(reverseAString("tomasz")).toBe("zsamot");
});
