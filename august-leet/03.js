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

/*  Result: 99.64%
    Runtime:
        best case: O(n) - due to reverse()
        worst case: O(n)
        average case: O(n)
    Time to Complete: 25 min
    Notes: 
        - need to practice regex

*/