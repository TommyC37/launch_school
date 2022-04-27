// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// Solution 1
numbers = [1, 2, 3, 4];
console.log(`Numbers before solution: ${numbers}`);

while (numbers.length > 0) { numbers.pop() };

console.log(`Solution 1: ${numbers}`);

// Solution 2
numbers = [1, 2, 3, 4];
console.log(`Numbers before solution: ${numbers}`);

numbers.length = 0;

console.log(`Solution 2: ${numbers}`);

// Solution 3
numbers = [1, 2, 3, 4];
console.log(`Numbers before solution: ${numbers}`);

numbers.splice(0, numbers.length);

console.log(`Solution 2: ${numbers}`);