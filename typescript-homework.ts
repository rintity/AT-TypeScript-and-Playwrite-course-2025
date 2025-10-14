//Declare a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.  Example: “Hello! I am Petar Petrov, 20 years old” **Hint: Use string interpolation 
const name: string = "Maya Denchovska";
const age: number = 43;
console.log(`Hello! I am ${name}, ${age} years old.`);

// Declare two variables of type number and assign them number values.  After that calculate their addition and substraction in different variables and print them. Example : const addition =  num1 + num2; 
const num1: number = 21;
const num2: number = 12;
const addition: number = (num1 + num2);
const substraction: number = (num1 - num2);
console.log(`Addition = ${num1} + ${num2} = ${addition}`)
console.log(`Substraction = ${num1} - ${num2} = ${substraction}`);

//Declare numeric variable and assign a num. Declare also a variable “isWithinRange” to compare if the number is withing the range. Example:  num >= 10 || num <= 50 
const num3: number = 9;
let isWithinRange: boolean = num3 >= 10 && num3 <= 50;
console.log(`Is ${num3} within the range of 10-50?: ${isWithinRange}`)

