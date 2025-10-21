// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

// object declaration
const car: Car = {
    type: "Fiat",
    model: "500",
    color: "white",
    horsePower: 100,
};

console.log(car);

// interface person object

interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;
}

// object with method and array value

const person: Person = {
    name: "Maya",
    lastName: "Denchovska",
    address: "Prof. Hristo Vakarelski 11E",
    age: 43,
    hobbies: ["football", "tennis", "hiking"],
    greeting: function () {
        return "Hello! My name is Maya.";
    },
}
//console.log(person);

// properties access
person.name;
person.age;
person["address"];

console.log(person.name);
console.log(person.hobbies);

person.greeting();
person["greeting"]();
console.log(person.greeting());

// properties redeclaration
person.age = 45;
console.log(person);

// person = {
//  age = 23,
//  name = "Peter",
//  lastName = "Petrov",
//}

// let vs const declaration
let dog = { name: "Spark" }
dog.name = "Bobb"
dog = { name: "Nik" }

const cat = { name: "Tom", age: 10 }
cat.name = "Kitty"
//cat = { name: "Lusi", age: 20 }

// explicit object type
const mouse: { name: string; favouriteFood: string; age: number } = {
    name: "Jerry",
    favouriteFood: "cheese",
    age: 2,
};

// Interfaces - optional parameters, read only and string literals
interface User {
    name: string;
    readonly email: string; // its value cannot be changes it is read only
    // string literals for role
    role: 'user' | 'admin' | 'superadmin' | 'superuser';
    // optional parameter => job?
    job?: string;
    password?: string | number;
}

const user: User = {
    name: "Tom",
    email: "tom@gmail.com",
    role: "admin",
    job: "QA",
};
// optional parameter added later
user.password = 12345678;
console.log(user);

const secondUser: User = {
    name: "Tommy",
    email: "tommmy@gmail.com",
    role: "superuser",
    job: "SQA",
};

// Extended interface 
interface UserPermissions extends User {
    permissions: string;
}
const thirdUser: UserPermissions = {
    name: "Tommy",
    email: "tommmy@gmail.com",
    role: "superuser",
    job: "SQA",
    permissions: "denied",
};



