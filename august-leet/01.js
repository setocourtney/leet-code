// Detect Capital

// Given a word, you need to judge whether the usage of capitals in it is right or not.
// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

// Example 1:
// Input: "USA"
// Output: True

// Example 2:
// Input: "FlaG"
// Output: False

// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

/*
 charAt(i) = cap && charAt(i+1) = cap
 charAt(i) = cap && charAt(i+1) = low && i = 0
 charAt(i) = low && charAt(i+1) = low

*/

var detectCapitalUse = function(word) {
    for (let i = 1; i < word.length - 1; i++) {
        let current = word.charCodeAt(i);
        let next = word.charCodeAt(i + 1);
        if ( isLowerCase(current) && !isLowerCase(next) ) {
            return false;
        } else if ( !isLowerCase(current) && isLowerCase(next) ) {
            return false;     
        }
    }   
    return true;
};

var isLowerCase = function(char) {
    return char > 97 && char < 122;
}

console.log(detectCapitalUse("FROG"));
console.log(detectCapitalUse("Frog"));
console.log(detectCapitalUse("frOg"));
console.log(detectCapitalUse("frog"));
console.log(detectCapitalUse("fROg"));
