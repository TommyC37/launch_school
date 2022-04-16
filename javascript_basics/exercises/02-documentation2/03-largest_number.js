/*
Using the documentation, determine how we can find the largest numeric value that
can be represented in JavaScript. Write a line of code that returns this value.

The largest number that can be represented (safely) in JS is 2^53 - 1.
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

// After running the program, the non scientific notation form of the number is: 9007199254740991.

/* CORRECTION:
   The actual max value is 1.7976931348623157e+308. This is found by used the MAX_VALUE static property of the Number object.
   The MAX_SAFE_INTEGER represents the largest possible number that can be processed and compared with precision.
   Any number larger than MAX_VALUE should be processed as infinity.
*/