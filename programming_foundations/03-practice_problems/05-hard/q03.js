// Given the following similar sets of code, what will each code snippet print?

/*
All three code blocks will rerturn:
"one is: ["two"]"
"two is: ["three"]"
"three is: ["one"]"

This is because JS passes objects/arrays by reference. So any change to the array in
the function affects the original array.

For that reason, A and B are essentially the same. Splice will also return the same values because
splice mutates arrays, it doesn't create a new one.

CORRECTION: I was wrong. Code C is the only one that mutates it.

Since we're using the assignment operator in Code A and B, JS is simply changing where the parameter points.
In other words, we're assigning it a whole new array.

*/

// Code A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Code B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Code C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);