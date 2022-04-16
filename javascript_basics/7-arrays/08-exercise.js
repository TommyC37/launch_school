function oddLengths(arr) {
  return arr.reduce((newArray, item) => {
    if (item.length % 2 === 1) {
      newArray.push(item.length);
    }
    return newArray;
  }, []);  
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));