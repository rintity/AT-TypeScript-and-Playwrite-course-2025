//1. Create a TypeScript interface named Person that represents a person with the following properties: • name (string) • lastName (string) • age (number) • email (string) • phoneNumber (number) 
interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
};
// 2.  Create a TypeScript interface named PersonInfo that Extends  Person type from the previous exercise and add the following properties: • country (optional string property) • greeting  (optional method that return welcome message)
interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}
// 3. Create an object with properties of type Person using the interface from exercise one
const personOne: Person = {
    name: "Maya",
    lastName: "Denchovska",
    age: 43,
    email: "m.denchovska@gmail.com",
    phoneNumber: +359899963919,
}
console.log(personOne);

// 4.  Create an object of type PersonInfo using the interface from Exercise two and declare an object person2 with properties of type PersonInfo.
const personTwo: PersonInfo = {
    name: "Peter",
    lastName: "Petrov",
    age: 33,
    email: "p.petrov@gmail.com",
    phoneNumber: +359812345678,
    country: "Bulgaria",
    greeting: function () {
        return `Welcome, ${this.name}!`
    },
} 
console.log(personTwo);
console.log(personTwo.greeting?.());