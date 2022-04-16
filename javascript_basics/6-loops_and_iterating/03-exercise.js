/* The following code causes an infinte loop because the condition
    (counter = 1) uses only one equal sign. Therefore, it's an assignment, not
    a conditional
*/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* Correction: according to the solution in the textbook, JS acctually accepts
    the assignment as a conditional. Since it's a statement, it evaluates as
    true and the loop runs infinitely.
*/