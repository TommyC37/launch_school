// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/* This would return 34 because JS passes primitives by reference. In other
words, someNumber is a value that is entirely independent of answer.

Therefore when we log answer - 8, we're logging 42 - 8

*/