/* Write code that capitalizes the words in the string 'launch school tech &
talk', so that you get the string 'Launch School Tech & Talk'.
*/

let text = 'launch school tech & talk';

function titleCase(str) {
  return str.split(' ').map(substr => substr.charAt(0).toUpperCase() + substr.slice(1)).join(' ');
}

console.log(titleCase(text));