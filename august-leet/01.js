// Detect Capital

/*
    Given a word, you need to judge whether the usage of capitals in it is right or not.
    We define the usage of capitals in a word to be right when one of the following cases holds:
    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".
    Otherwise, we define that this word doesn't use capitals in a right way.
    
    Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

*/

/* Test Cases:

    console.log(detectCapitalUse("FROG")); => true
    console.log(detectCapitalUse("Frog")); => true
    console.log(detectCapitalUse("frOg")); => false
    console.log(detectCapitalUse("frog")); => true
    console.log(detectCapitalUse("fROg")); => false

*/

/* Logic:

    Any two consecutive letters of different case are not acceptable, UNLESS it is the first two letters in the word.

*/

var detectCapitalUse = function(word) {
    for (let i = 0; i < word.length - 1; i++) {
        let current = word.charCodeAt(i);
        let next = word.charCodeAt(i + 1);
        if ( isLowerCase(current) && !isLowerCase(next) ) {
            // current = lowercase && next = uppercase
            return false;
        } else if ( !isLowerCase(current) && isLowerCase(next) && i !== 0) {
            // current = uppercase && next = lowercase except when i = 1
            return false;     
        }
    }   
    return true;
};

// Helper function to test for lowercase
// Assumes the input is made of latin letters
var isLowerCase = function(char) {
    return char >= 97 && char <= 122;
}

console.log(detectCapitalUse("FROG"));
console.log(detectCapitalUse("Frog"));
console.log(detectCapitalUse("frOg"));
console.log(detectCapitalUse("frog"));
console.log(detectCapitalUse("fROg"));


/*  Result: 70%
    Runtime: 
        best case: O(1)
        worst case:  O(n)
        average case: O(n)
    Time to Complete: 45 min
*/