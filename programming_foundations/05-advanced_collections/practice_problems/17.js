/*
A UUID is a type of identifier often used to uniquely identify items, even when some
of those items were created on a different server or by a different application. That
is, without any synchronization, two or more computer systems can create new items and
label them with a UUID with no significant risk of stepping on each other's toes. It
accomplishes this feat through massive randomization. The number of possible UUID values
is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is
vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f)
represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12
pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.
*/

function makeUUID() {
    let uuid = '';
    let randomNum;
    let chars = '0123456789abcdef'
    for (let iter = 0; iter < 36; iter++) {
        if ([8, 13, 18, 23].includes(iter)) {
            uuid += '-';
        } else {
            randomNum = Math.floor(Math.random() * 16);
            console.log(randomNum);
            uuid += chars[randomNum];
        }
    }
    return uuid;
}

let test = makeUUID();

console.log(test);