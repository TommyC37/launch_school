/* Change your isBlank function from the previous exercise to return true if the
string is empty or only contains whitespace. For example:
*/

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

function isBlank(text) {
  return text.trim().length === 0;
}

