// Create a function that takes an array and returns the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

const getFirstValue = (array) => {
    return array[0];
}

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

const addUp = (num) => {
    let answer = 0;
    for (let i = 1; i <= num; i++) {
        answer += i;
    }
    return answer;
}

// function addUp(num) {
//     return (num * (num + 1))/2;
//   }

// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
// }

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

const largestSwap = (num) => {
    let str = "" + num;
    let second = str[1];
    let first = str[0];
    str = second + "" + first;
    return num > str ? true : false;
}

// function largestSwap(num) {
// 	let str = String(num);
// 	let newStr = str[1] + str[0];
// 	return str >= newStr;
// }

// function largestSwap(num) {
// 	return num / 10 > num % 10
// }

//modulo operator => % returns remainder

// console.log(largestSwap(43));

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. 
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
// changeEnough([1, 0, 5, 219], 19.99) ➞ false

const changeEnough = (changeArray, totalDue) => {
    let totalChange = changeArray[0] * .25;
    totalChange += changeArray[1] * .10;
    totalChange += changeArray[2] * .05;
    totalChange += changeArray[3] * .01;
    return totalChange >= totalDue;
}

// console.log(changeEnough([2, 100, 0, 0], 14.11));
// console.log(changeEnough([0, 0, 20, 5], 0.75));
// console.log(changeEnough([30, 40, 20, 5], 12.55));
// console.log(changeEnough([10, 0, 0, 50], 3.85));
// console.log(changeEnough([1, 0, 5, 219], 19.99));


// const sum = arr => arr.reduce((total, num) => total + num, 0);
// const values = [0.25, 0.1, 0.05, 0.01];
// const changeEnough = (change, amountDue) =>
//   sum(change.map((amount, i) => amount * values[i])) >= amountDue;


//   Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

const check = (array, num) => {
    let newArray = array.filter(element => element !== num);
    return newArray.length < array.length;
}

// function check(arr, el) {
// 	return arr.includes(el)
// }

// function check(arr, el) {
// 	return arr.indexOf(el) > -1;
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

const reverse = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i > -1; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// function reverse(arr) {
// 	return arr.reverse();
// }

// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));