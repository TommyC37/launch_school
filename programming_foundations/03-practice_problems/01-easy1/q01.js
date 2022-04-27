// Will the code below raise an error?
// No, the code will just insert empty arrays in slots 3, 4, and 5

let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);

// Bonus

console.log(numbers[4]);  // what will this line return?

// The last line will return undefined

// Important distinction: although it returns undefined, it is actually an empty slot,
// NOT the value undefined. E.g.:

numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]