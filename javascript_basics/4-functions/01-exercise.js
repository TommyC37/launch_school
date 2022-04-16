/* The following code will log "1" to the console. Executing the foo function
    does NOT affect the output because it creates a local variable called bar.
    Therefore, when the console.log() method is called outside of the foo
    function, it references the global "bar" value.
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);