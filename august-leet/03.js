// Valid Palindrome

/*  Problem Statement:

    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome. 
    Assumption: s consists only of printable ASCII characters.

*/

/*  Example:
    isPalindrome("A man, a plan, a canal: Panama"); => true 
    isPalindrome("race a car"); => false     
*/

/* Logic:
    //remove punctuation and spaces
    //reverse string
    //test if same
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var justLetters = s.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').split(" ").join("").toLowerCase();
    var reverse = justLetters.split("").reverse().join('');
    return justLetters === reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));



/* ------------------------------------------------------------------------ */

/*  Result: 85.27%
    Runtime:
        best case: O(1)
        worst case: O(1)
        average case: O(1)
    Time to Complete: 30 min
    Notes: 
        Had to relookup a few concepts
            hashset - unsorted set of keys (like an object but uses it's own indices as keys)
            constructor functions - using Object.prototype to create new functions associated with the object

*/