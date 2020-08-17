// Longest Palindrome
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.
// Example:
// Input:
// "abccccdd"
// Output:
// 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

const longestPalindrom = (str) => {
    let counter = {};
    let answer = 0;
    let odds = false;
    for (let char of str) {
        if (!counter[char]) {
            counter[char] = 1;
        } else {
            counter[char]++;
        }
    }
    Object.entries(counter).forEach(([key, val]) => {
        if ( val % 2 === 0) {
            answer += val;
        } else {
            answer += val - 1;
            odds = true;
        }
    })
    return odds > 0 ? answer + 1 : answer;
}

console.log(longestPalindrom("abccccdd"));
console.log(longestPalindrom("ccc"));

/* ------------------------------------- */

/*  Result: 43.66%
    Runtime:
        best case: O(2n)
        worst case: O(2n)
        average case: O(2n)
    Space: O(n)
    Time to Complete: 30 min

*/

/* ------------------------------------- */

const longestPalindromRefactored = (str) => {
    let sorted = str.split('').sort();
    let answer = 0;
    let odds = false;
    let i = 0;
    while (i < sorted.length) {
        if (sorted[i] === sorted[i + 1]) {
            answer += 2;
            i += 2;
        } else {
            i++;
            odds = true;
        }
    }
    return odds ? answer + 1 : answer;
}

console.log(longestPalindromRefactored("abccccdd"));
console.log(longestPalindromRefactored("ccc"));

/* ------------------------------------- */

/*  Result: 70.26%
    Runtime:
        best case: O(n)
        worst case: O(2n)
        average case: O(2n))
    Space: O(n)
    Time to Complete: 30 min

*/
