/* Which of the following values are primitive? Which are objects? Which are
    neither?

"foo"                             Primitive
3.1415                            Primitive
[ 'a', 'b', 'c' ]                 Object
false                             Primitive
foo                               Neither
function bar() { return "bar"; }  Object
undefined                         Primitive
{ a: 1, b: 2 }                    Object

*/