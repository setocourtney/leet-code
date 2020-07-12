// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum 
// of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// oddishOrEvenish(43) ➞ "Oddish"

const oddishOrEvenish = (num) => {
    return num.toString().split('').reduce((sum, val) => parseInt(val) + parseInt(sum)) % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(694));
console.log(oddishOrEvenish(4433));
console.log(oddishOrEvenish(11));
