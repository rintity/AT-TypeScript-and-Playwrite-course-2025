//let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = 'Welcome!';
//Cannot assign to 'welcomeMsg' because it is a constant.
//welcomeMsg = 'Welcome, Peter!'

// string
let message: string = 'Hello, Peter!';

let messageLength: number = message.length;
console.log(messageLength);

// string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substrtact: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;

// boolean (true/false)
// === by type and value
// == by value only
let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

//console.log("areEqual", areEqual);

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;
//console.log("areEqualTo", areEqualTo);
//console.log("isAnyNumEqualTo", isAnyNumEqualTo)

// conditions 

// ternary operator
//5 = 5 ? "true result" : "false result"
let positiveNumComparison: string = numOne > 0 ? `The number ${numOne} is positive.` : `The numer ${numOne} is negative.`;
console.log(positiveNumComparison);

// if/else statement
const numThree: number = 100;
if (numThree <= 10) {
    console.log("The numer is less ot equal to 10");
} else if (numThree > 110) {
    console.log("The number is greater than 110")
}
else if (numThree > 50) {
    console.log("The number is greater than 50")
}
else {
    console.log("numOne is not greater than 3");
}
