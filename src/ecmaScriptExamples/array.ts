const array = [1, 2, 3, 4, 5, 6];

const result = array.filter(item => item % 2 === 0);
// const result = array.find(item => item === 2);
// const result = array.find(item => item === 2);
console.log('result: ', result);

// Array.at()

const array2 = ['inkoop', 'draxlr', 'sup'];

// Using the length property
const lastItem = array[array2.length - 1];
console.log(lastItem); // Output: sup

// Using the new at method
const lastElement = array2.at(-1);
console.log(lastElement); // Output: sup
console.log(array2.at(-2)); // Output: draxlr
console.log(array2.at(0)); // Output: inkoop

export {};
