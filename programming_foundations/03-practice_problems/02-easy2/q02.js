/*
The Array.prototype.reverse method reverses the order of elements in an array, 
and Array.prototype.sort can rearrange the elements in a variety of ways, 
including descending. Both of these methods mutate the original array as shown 
below. Write two distinct ways of reversing the array without mutating the original 
array. 

***Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/

// Solution 1
let numbers = [1, 2, 3, 4, 5];
console.log(`Numbers before solution 1: ${numbers}`);
console.log(`Solution 1: ${numbers.slice().reverse()}`);


// Solution 2
numbers = [1, 2, 3, 4, 5];
console.log(`Numbers before solution 2: ${numbers}`);
console.log(`Solution 2: ${[...numbers].sort(function(num1,num2){return num2-num1})}`);

// Bonus Question: Can you do it using the Array.prototype.forEach() method?
numbers = [1, 2, 3, 4, 5];
reversedArray = []

console.log(`Numbers before bonus solution: ${numbers}`);

numbers.forEach((num) => {
  reversedArray.unshift(num);
});

console.log(`Bonus solution: ${reversedArray}`);