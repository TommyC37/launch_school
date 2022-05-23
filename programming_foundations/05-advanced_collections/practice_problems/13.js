// Given the following data structure, sort the array so that the sub-arrays
// are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  console.log(a);
  console.log(b);
  x = a.filter(val => val % 2 !== 0)
   .reduce((prev, curr) => prev + curr, 0);
  y = b.filter(val => val % 2 !== 0)
   .reduce((prev, curr) => prev + curr, 0);
  return x - y;
});

console.log(arr);