/* The following code will NOT produce an error. This is because two separate
    constants called 'FOO' are being created: one global and one local.
*/

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);