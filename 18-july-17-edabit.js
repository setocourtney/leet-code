
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
// If there are no strings containing numbers, return an empty array.
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]

const numInStr = (arr) => {
    let result = [];
    result = arr.filter((str) => {
        for (let i = 0; i < str.length; i++) {
             if (str.charCodeAt(i) >= 060 && str.charCodeAt(i) <= 071) {
                 return str;
             }
         }
    })
    return result;
}


// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
// Given a censored string and a string of the censored vowels, return the original uncensored string.
// Example
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
// uncensor("abcd", "") ➞ "abcd"
// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

const uncensor = (str, vowels) => {
    let result = "";
    let index = 0;
    for (let char of str) {
        if (char === '*') {
            result += vowels[index];
            index++;
        } else {
            result += char;
        }
    }
    return result;
}

// const uncensor = (str, vowels) => {
//     let result;
//     for (let i = 0; i < vowels.length; i++) {
//         result = str.replace('*', vowels[i]);
//     }
//     return result;
// }


// Create a function that takes an array and returns a new array containing only prime numbers.
// filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]

// filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]

// filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]

const filterPrimes = (num) => {
    return num.filter((el) => {
        for (let i = 2; i <= el / 2; i++) {
            if ( el % i === 0) {
                return false;
            } 
        }
        return true;
    });
}

console.log(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]));

console.log([] == []);