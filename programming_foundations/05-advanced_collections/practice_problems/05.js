// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

let age = Object.values(munsters)
                .filter(elem => elem.gender === 'male')
                .reduce((prev, curr) => prev + curr.age, 0);
//reduce((elem1, elem2) => elem1.age + elem2.age, 0);

console.log(age);