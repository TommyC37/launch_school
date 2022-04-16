// What will the following code log to the console and why? Don't run it until
// you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

// This will log nothing because the variable was declared after it was called.

/* CORRECTION: This logs 'undefined' to the console. Variables declared with var
are "hoisted," meaning they're pulled to the beginning of the scope, but not
assigned a value until the line in which it is written. In other words, the code
actually functions like this:

var greeting;

console.log(greeting);

greeting = 'Hello world!';

*/