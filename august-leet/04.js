// Power of Four

/*
    Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
    Follow up: Could you solve it without loops/recursion?
    Notes: 4 ^ x power = num
*/

/*
    isPowerOfFour(16) => true
    isPowerOfFour(5) => false
*/

/**
 * @param {number} num
 * @return {boolean}
 */

var isPowerOfFour = function(num) {
    if (num === 0) return false;

    var pow = Math.floor(Math.log(num) / Math.log(4));
    if (num === Math.pow(4, pow)) {
        return true;
    } else {
        return false;
    }
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(0));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(2));

/* ------------------------------------------------------------------------ */

/*  Result: 99.65%
    Runtime:
        best case: O(n) - due to reverse()
        worst case: O(n)
        average case: O(n)
    Time to Complete: 25 min
    Notes: 
        - need to practice regex

*/