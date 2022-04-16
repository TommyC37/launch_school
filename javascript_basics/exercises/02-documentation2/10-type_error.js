/*
    The following code returns this error: TypeError: tweet.length is not a function.

    Check the documentation for both TypeError and lenght to diagnose the problem.

    A:
    1. TypeError: This error occurs when either:
        a) an operator or argument is passed into a function that's not compatible.
        b) you're attempting to modify a value that cannot be modified.
        c) you're attempting to use a value in an inappropriate way.
    2. "length" is a read-only data property of strings. Therefore, it's inappropriate to use parentheses (since
        yiou cannot pass any arguments into the function).
*/

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

/*  Correction:
    The reason for the TypeError is that tweet.length is a number. However, tweet.length() is a number that being 
    attempted to be invoked as a function.
*/