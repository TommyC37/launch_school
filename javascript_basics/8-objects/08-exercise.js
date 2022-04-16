let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3
};

function copyObj (objToCopy, keysToCopy=Object.keys(objToCopy)) {
  result = {};
  for (let ind = 0; ind < keysToCopy.length; ind += 1) {
    key = keysToCopy[ind];
    result[key] = objToCopy[key];
  }
  return result;
}

console.log(objToCopy);

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy);
console.log(newObj2);

let newObj3 = copyObj(objToCopy);
console.log(newObj3);