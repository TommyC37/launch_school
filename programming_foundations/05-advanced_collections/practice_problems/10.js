// Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.sort((a, b) => b - a);
  } else {
    subArr.sort();
    return subArr.reverse();
  }
});

console.log(arr);