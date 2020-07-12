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


// Write a program to find all the prime factors of a given number. 
// The program must return an array containing all the prime factors, sorted in ascending order. 
// Remember that 1 is neither prime nor composite and should not be included in your output array.
// primeFactorize(25) ➞ [5, 5]

const primeFactorize = (num) => {
    let isPrime = true;
    // test if integers from 2 to sqrt(num) is divisible without remainder, then num is not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            //num is not prime
            isPrime = false;
            //run recursion to test if factors are prime
            return primeFactorize(i).concat(primeFactorize(num / i));
        }
    }
    if (isPrime) {
        //num is prime
        return [num];
    }
}

console.log(primeFactorize(2532))

