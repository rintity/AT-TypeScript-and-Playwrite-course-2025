// arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringsArray: string[] = ["Pesho", "Gosho", "Tosho", "Ivan"];
let combineArray: (string | number)[] = [1, "Pesho", "Ivan", 2];

// access element by index
stringsArray[0]; //Pesho
stringsArray[1]; //Gosho
combineArray[2]; //Ivan

console.log(stringsArray[1]);

// access array length
numsArray.length;

// array methods - map

let multiplyNums = numsArray.map((num: number) => num * 2);
console.log(multiplyNums);
let mapNames = stringsArray.map((currName: string) => `Hello ${currName}`);
console.log(mapNames);
let checkTypeOf = combineArray.map((element: string | number) => {
    if (typeof element === "number") {
        return element + 5;
    } else {
        return `Welcome ${element}`;
    }
});
console.log(checkTypeOf);

//type any, unknown, undefined, null
let test: any = "test";
test = 10;
test = [10, 50, 'test'];

let testUnknown: unknown = [10, 50];
if (typeof testUnknown === 'number') {
    testUnknown * 2
}

let a: string | undefined;

let b: number | null = null;

// method filter create copy of the massive and return the changed data

let positiveNums: number[] = [2, 3, 4, 5, 6];
let filteredArr: number[] = positiveNums.filter((num: number) => num > 3 && num < 6);
console.log("filteredArr", filteredArr);

// method sort

let sortNums: number[] = [100, 2, 30, 5, 40, 6];
let sortedResult = sortNums.sort((a: number, b: number) => a-b);
// a-b -ascending , b- a descending
console.log(sortedResult);

// method push
sortedResult.push(200);
console.log(sortedResult);

// method pop removes the last element from the array
sortedResult.pop();
console.log(sortedResult);

// method shift removes first the first element from the array
sortedResult.shift();
console.log(sortedResult);

// method unshift adds new element to the first index of array
sortedResult.unshift(1);
console.log(sortedResult);