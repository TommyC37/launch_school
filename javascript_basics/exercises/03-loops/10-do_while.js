/* What is the difference between the following two code snippets?
Check the MDN documentation on while and do while.

*********************************
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

*********************************

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

*********************************
The diffence is that the first loop will never run the code because the counter
is never greater than zero.

The second loop will execute once because the do while loop runs the code at 
least once before checking the condition.

*/