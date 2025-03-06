import * as crypto from "crypto";
// type alias in TypeScript

// type alias

// type User = string;
// type ID = number | string;
// const user = 'John Doe';

// function printId(id: ID) {
//   console.log(id);
// }

type ID = number | string;

// type Address = {
//   street: string;
//   city: string;
//   country: string;
// };

type User = {
  id: ID;
  firstName: string;
  lastName?: string;
  age: number;
  skills: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
};

type Address = User['address'];

function createUser(
  firstName: string,
  lastName: string,
  age: number,
  skills: string[]
): User {
  const user = {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    age,
    skills: [],
    address: {
      street: "123 Main St",
      city: "Boston",
      country: "USA",
    },
  };

  return user;
}

const user = createUser("John", "Doe", 30, ["reading", "coding", "hiking"]);

console.log(user);


function printAddress (address: User['address']){
    console.log(address);
}

printAddress({street: '123 Main St', city: 'Boston', country: 'USA'});
