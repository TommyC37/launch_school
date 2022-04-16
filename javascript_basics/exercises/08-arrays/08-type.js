/* How can you check whether a variable holds a value that is an array? For
example, imagine you start writing a function and want to check whether its
argument is an array:
*/

function filter(input) {
  // Is input an array?
  return Array.isArray(input);
}

/* Note: The `typeOf` operator returns 'object' for arrays because arrays are
objects. That means it doesn't distinguish between arrays and other objects, and
is therefore not a viable solution to this problem.
*/