let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

/* The following two blocks of code will not produce the same output. This is 
    because the Object.keys method will only iterate over owned keys.
*/

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

console.log('BREAK');

for (let key in myObj) {
  console.log(key);
}