/*  The follow program will log the world "hello" twice. This is because the 
    function never returns the values it creates.
*/

let foo = {
  a: 'hello',
  b: 'world'
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*  I was incorrect. It logs "hi" then "hello." This is because objects are
    mutable, primitives are not.
*/