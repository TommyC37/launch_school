/* Write code that checks whether the string byteSequence contains the character
x.
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(`The letter x ${byteSequence.includes('x') ? 'is' : ' is not'} in the string.`);


// For funsies, here's how to check for a letter, regardless of case.
console.log(byteSequence.toLowerCase().includes('t'));