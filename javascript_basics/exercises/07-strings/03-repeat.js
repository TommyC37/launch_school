/* Implement a function repeat that repeats an input string a given number of
times, as shown in the example below; without using the pre-defined string
method String.prototype.repeat().
*/

console.log(repeat(3, 'ha')); // 'hahaha'

function repeat (times, text) {
  let result = '';
  while (times > 0) {
    result += text;
    times -= 1;
  }
  return result;
}