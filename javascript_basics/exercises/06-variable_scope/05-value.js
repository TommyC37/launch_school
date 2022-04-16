/*  What will the following code log to the console and why? Don't run it until
    you have tried to answer.
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// This will log 1 and then throw an error because a variable that has already
// been declared is being attempted to be declared again.

/* 
CORRECTION: since the inner block has an a value that is declared, it
overshadows the a declared in the outer scope. In other words, we can't access
it. And since the variable is called before it is declared, an error is thrown
befoer any value is ever logged to the console.
*/