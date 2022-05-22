// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/*
Returns  [1, 1, 1, 1, 1]

Array.prototype.fill takes three arguments: value, start, end. It will replace every element of
an array from start to end with the value provided.

It is destructive (according to the documentation it is a mutator method). However, even without the
documentation, we could find out by running test code that calls the method on an array and then
logging the array to the console to see if it's altered.
*/