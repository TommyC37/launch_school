let obj = {
  b: 2,
  a: 1,
  c: 3
};

let arr = Object.keys(obj);

for (let val = 0; val < arr.length; val += 1) {
  arr[val] = arr[val].toUpperCase();
}

console.log(arr);