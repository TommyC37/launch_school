let list1 = [ 1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

/* Below is my original solution:

function findLargestNum (arr) {
  let result;
  for (let val of arr) {
    if (result === undefined || val > result) {
      result = val;
    }
  }
  return result;
}

console.log(findLargestNum(list1));
console.log(findLargestNum(list2));
console.log(findLargestNum(list3));
*/

//Below is a more elegant solution (per the book's solution)

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));