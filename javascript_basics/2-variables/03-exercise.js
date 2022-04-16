/* When you run the following code, you will get an error saying that 'foo' is
    not defined. This is because 'foo' was declared inside of curly braces, 
    therefore it's scope is limited to that code block (and the console log was
    called outside of that code block).
*/
{
  let foo = 'bar';
}

console.log(foo);

// One thing I learned from this is that this is called a ReferenceError.