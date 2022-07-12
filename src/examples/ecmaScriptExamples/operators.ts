// The nullish coalescing operator
let value1;
const a = value1 || 1; // a is 1
value1 = 2;

const b = value1 || 1; // b is 2

const value2 = 0;
const c = value2 ?? 1; // c is 1

const value3 = '';
const d = value3 ?? 'test'; // d is ''

const value4 = NaN;
const e = value4 ?? 1; // e is NaN

// Optional Chaining

type MyType = { a?: string };

const myObject: MyType = {};

const result1 = myObject ? myObject.a : 'a';
const result2 = myObject?.a;

const result3 = myObject?.a ?? 1;

// console.log(result3);

// Nullish assignment (??=)

const quote = 'A';
let existingQuote = 'B';
let nonExistingQuote = null;
existingQuote ??= quote;
nonExistingQuote ??= quote;
console.log(existingQuote); // B
console.log(nonExistingQuote); // A

// And assignment (&&=)

let emptyStringAnd = '';
emptyStringAnd &&= 'bar';
console.log(emptyStringAnd); // “”

let nonEmptyStringAnd = 'foo';
nonEmptyStringAnd &&= 'bar';
console.log(nonEmptyStringAnd); // “bar”

// Or assignment (||=)

let emptyStringOr = '';
emptyStringOr ||= 'bar';
console.log(emptyStringOr); // “bar”

let nonEmptyStringOr = 'foo';
nonEmptyStringOr ||= 'bar';
console.log(nonEmptyStringOr); // “foo”

export {};
