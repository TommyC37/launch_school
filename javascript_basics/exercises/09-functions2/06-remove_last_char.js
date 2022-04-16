/* Create a function removeLastChar that takes a string as an argument, and
returns the string without the last character.
*/

function removeLastChar(text) {
  return text.slice(0, text.length -1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'