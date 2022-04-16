// Yes an error will occur in the code below because the index is out of range.
let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]);

/*
  I was wrong! In Javascript, if an index is out of range it doesn't return
  an error, it returns undefined.
*/