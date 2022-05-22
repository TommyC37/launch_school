// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// [underfined, undefined, undefined] because there is no return statement.