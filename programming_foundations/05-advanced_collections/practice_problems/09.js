// Given the following data structure, return a new array with the same 
// structure, but with the values in each subarray ordered -- alphabetically
// or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = [];

arr.forEach(subArr => {
  if (typeof subArr[0] === 'number') {
    subArr.sort((a, b) => a - b);
  } else {
    subArr.sort();
  }
  newArr.push(subArr);
});

console.log(newArr);

/*
Launch school solution

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});

*/