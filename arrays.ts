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

