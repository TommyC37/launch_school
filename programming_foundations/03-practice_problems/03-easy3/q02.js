// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// The code will return [1, 2, 3, 4, 5]

/*
Incorrect!

In JS, the + operator first converts the arrays to strings, then concatenates the strings.

e.g.

[1, 2, 3] => "1, 2, 3"
[4, 5] => "4, 5"
"1, 2, 3" + "4, 5" => "1, 2, 34, 5" => [1, 2, 34, 5]
*/