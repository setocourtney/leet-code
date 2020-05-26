// Create a function that takes two numbers as arguments and return their sum.
// Examples
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

// const addition = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addition(3, 2));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// const addUp = (num) => {
//     let result = 0;
//     for (let i = num; i > 0; i--) {
//         result += i;
//     }
//     return result;
// }

// console.log(addUp(4));
// console.log(addUp(13));

// function addUp(num) {
//     return (num * (num + 1))/2;
// }

// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
// }

// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
// Examples
// isInRange(4, { min: 0, max: 5 }) ➞ true
// isInRange(4, { min: 4, max: 5 }) ➞ true
// isInRange(4, { min: 6, max: 10 }) ➞ false
// isInRange(5, { min: 5, max: 5 }) ➞ true

// const isInRange = (num, rangeObj) => {
//     return num >= rangeObj.min && num <= rangeObj.max;
// }

// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));
// console.log(isInRange(5, { min: 5, max: 5 }));

// Write a function that returns true if a hash contains the specified key, and false otherwise.
// Examples
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

// const hasKey = (obj, key) => {
//     let output = false;
//     if (obj[key]) {
//         output = true;
//     }
//     return output;
// }

// const hasKey = (obj, key) => {
//     return obj.hasOwnProperty(key);
// }

const hasKey = (obj, key) => {
     return obj[key] ? true : false;
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));
