/* The following code logs 'bar' to the console. This is because 'let' was used
    to declare two seaparate the variables (one global variable and one local
    variable limited to the scope of the brackets). If the second variable did
    not have 'let,' it would've reassigned the value for the global 'foo.'
*/

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);