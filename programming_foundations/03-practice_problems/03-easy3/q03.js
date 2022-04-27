// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Output = "hello there"

// This is because primitives are immutable. For that reason, JS creates a new copy
// of the string when assinging a string ot a variable.