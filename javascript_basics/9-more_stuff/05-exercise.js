/*  The following function splits a string into an array of words, reverses
    their order, and then replaces each word with the length of the word
*/

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

string1 = 'This is a string';
console.log(doSomething(string1));