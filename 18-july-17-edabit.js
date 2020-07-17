
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

console.log(numInStr(["1a", "a", "2b", "b"]));