/*  What will the following code log to the console and why? Don't run it until
    you have tried to answer.
*/

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// This will log 2 because we passed b into the function as an argument. The 
// console log is actually logging the argument (i.e. b)