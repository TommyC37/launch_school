/*  What will the following code log to the console and why? Don't run it until
    you have tried to answer.
*/
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/*
This will log false, because the code on line 8 declared a new variable b with
local scope. The console.log statement is calling the variable b that has global
scope.
*/