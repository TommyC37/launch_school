data = ['true', false, 1.5, 2, undefined, { foo: 'bar' }];

data.forEach(i => {
  console.log(`${i} has a data type of ${typeof i}`);
});
