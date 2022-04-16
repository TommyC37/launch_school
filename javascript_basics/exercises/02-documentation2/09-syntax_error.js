/*
    The following code produces this error message: SyntaxError: Unexpected token &&

    Find what it means; fix the code.

    A:
    This error occurs when a specific language constructor was expected.
*/

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}