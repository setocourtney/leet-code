// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum 
// of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// oddishOrEvenish(43) ➞ "Oddish"

const oddishOrEvenish = (num) => {
    return num.toString().split('').reduce((sum, val) => parseInt(val) + parseInt(sum)) % 2 === 0 ? "Evenish" : "Oddish";
}

// Create a function that takes two dates and returns the number of days between the first and second date.
// getDays(
//     new Date("June 14, 2019"),
//     new Date("June 20, 2019")
//   ) ➞ 6

const getDays = (a, b) => {
    return (b - a) / 86400000;
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ));