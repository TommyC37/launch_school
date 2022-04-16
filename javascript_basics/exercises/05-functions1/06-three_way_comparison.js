/* Write a function that compares the length of two strings. It should return -1
if the first string is shorter, 1 if the second string is shorter, and 0 if
they're of equal length, as in the following example:
*/

function compareByLength(str1, str2) {
  return (str1.length > str2.length) ? 1 :
          (str1.length < str2.length) ? -1 :
          0;
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0