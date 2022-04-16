/* In the following code, y++ returns NaN, because it's trying to perform a 
    mathematical operation on a string.
*/

let x = "5";
x = x + 1;

let y = "5"
console.log(y++)

/*  Correction, I was wrong. The ++ operation coerces the string into a numeric
    value. However, since the ++ trails after the value, it increments the value
    after the operation. Therefore it will return the numeric value of 5.
*/