// Pascal's Triangle III

// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
// Note that the row index starts from 0.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: 3
// Output: [1,3,3,1]

// Entry k of row n = (n k) = n! / k!(n-k)!

var getRow = function(rowIndex) {
    let result = [];
    let nFact = getFactorial(rowIndex);
    for (let i = 0; i < rowIndex + 1; i++) {
        let val = nFact / (getFactorial(i) * getFactorial(rowIndex - i));
        result.push(val);
    }
    return result;
};

let getFactorial = function(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result = result * i;
    }
    return result;
}


/* ------------------------------------------------------------------------ */

/*  Result: 73.35%
    Runtime:
        best case: O(2n)
        worst case: O(n^2)
        average case: O(n^2)
    Space: O(n)
    Time to Complete: 45 min

*/
