// Create an array of strings and add a new element at the end of the array. Log the result. 

let stringsArr: string[] = ["one", "two", "three", "four"];
stringsArr.push("five");
console.log(stringsArr);

// Create an array of numbers and remove the first element from the array. Log the result. 

let numsArr: number[] = [11, 22, 33, 44, 55];
numsArr.shift();
console.log(numsArr);

// Use the map method to create a new array and divide each number by 2  “num / 2”  from [1, 2, 3, 4, 5].  Log the result. 

let numsArr1: number[] = [1, 2, 3, 4, 5];
let devideNums = numsArr1.map((num: number) => num / 2);
console.log(devideNums);

// Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result. 

let numsArr2: number[] = [3, 7, 1, 9, 12, 4];
let greaterThanXArr = numsArr2.filter((num: number) => num > 5);
console.log(greaterThanXArr);

// Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result. 

let numsArr3: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumsArr3 = numsArr3.sort((numOne: number, numTwo: number) => numOne - numTwo);
console.log(sortedNumsArr3);

// Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result. 

let stringsArr1: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(stringsArr1.slice(3, 5));

//Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result. 

let stringsArr2: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let removedElements = stringsArr2.splice(1, 2);
console.log(stringsArr2);

// Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result. 

function findLargest(numOne: number = 12, numTwo: number = 23, numThree: number = 4): number {
    let largest: number;
    if (numOne >= numTwo && numOne >= numThree) {
        largest = numOne;
    } else
        if (numTwo >= numOne && numTwo >= numThree) {
            largest = numTwo;
        } else {
            largest = numThree;
        }

    console.log(`The largest number is: ${largest}`);
    return largest;
}
findLargest();
findLargest(1, 2);
findLargest(10, 20, 30);

// Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter. 

function convertToCentimeters(inches: number = 1): number {
    let centimeters: number = inches * 2.54;
    console.log(`${inches} inch = ${centimeters} cm`);
    return centimeters;
}
convertToCentimeters();
convertToCentimeters(10);

// Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square. 

function calculateArea(width: number, height?: number) {
    let area: number;
    if (height) {
        area = width * height;
        console.log(`The shape is rectangle and its area is ${area}`);
    }
    else {
        area = width * width;
        console.log(`The shape is square and its area is: ${area}`);
    }
    return area;
}
calculateArea(4);
calculateArea(2, 4);