const obj = {
  a: 'foo',
  b: 42,
  c: false,
};

// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

interface MyParams {
  firstname: string;
  surname: string;
  age: number;
  address: string;
}

// const printName = ({ firstname, surname }: MyParams) => `${firstname} ${surname}`;

// const printName2 = (params: MyParams) => {
//   const { firstname, surname } = params;

//   return `${firstname} ${surname}`;
// };

// console.log(printName({ firstname: 'John', surname: 'Doe', age: 25, address: 'Foo' }));

// const printAll = (a: number, b: number, ...c: any[]) => {
//   console.log(a); // 1
//   console.log(b); // 2
//   console.log(c); // [3, 4, 5, 6]
// };

// printAll(1, 2, { foo: 'bar' }, 4, 5, 6);

export {};
