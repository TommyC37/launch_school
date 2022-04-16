/*  What will the following code log to the console and why? Don't run it until
    you have tried to answer.
*/

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/* This will either a) throw an error because it's attempting to change a const
or b) it will log 1 because the const can't be changed.
*/