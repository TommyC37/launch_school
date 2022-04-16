/* We are experimenting with some code to get more comfortable working with
objects. Run the snippet below and explain why "It's true!" is never output.
*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}


/* "It's true" never logs because we're using the strict equality operator.

CORRECTION: it has nothing to do with the equality operator. The if statement is
comparing the property name with boolean true. All property names are strings.
*/