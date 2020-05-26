// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Examples
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true

const lessThanOrEqualToZero = (num) => {
    return num <= 0;
    // if (num > 0) {
    //     return false;
    // } else {
    //     return true;
    // }
};

console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));