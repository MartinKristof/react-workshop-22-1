// class User {
//   #name: string;

//   constructor(name: string) {
//     this.#name = name;
//   }

//   get name(): string {
//     return this.#name;
//   }
// }

class UserTS {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

// const peter = new User('Peter');
const peterTs = new UserTS('Peter');

// console.log(peter.name);
console.log(peterTs.getName());

export {};
