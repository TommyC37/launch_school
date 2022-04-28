// What will the following two lines of code output?

console.log(0.3 + 0.6);           // 0.9
console.log(0.3 + 0.6 === 0.9);   // true

/*
Incorrect!

JS uses floating point numbers for all numeric operations. Most floating point
reperesentations on computers lack a ceratin amount of precision and that can yield
unexpected result.

In this example, 0.6 + 0.9 does NOT evaluate to 0.9, but 0.8999999 instead.
*/