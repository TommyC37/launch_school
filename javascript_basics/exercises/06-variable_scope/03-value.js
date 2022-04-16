/*  What will the following code log to the console and why? Don't run it until
    you have tried to answer.
*/
if (true) {
  let myValue = 20;
}

console.log(myValue);

// This will log undefined because the value was called outside of it's scope
// (the variable was declared within the if statement and has no scope beyond
// that statement)

// CORRECTION: It throws a ReferenceError for the above reason.