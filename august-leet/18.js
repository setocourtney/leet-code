// Numbers With Same Consecutive Differences

// Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
// Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.
// You may return the answer in any order.


// Example 1:
// Input: N = 3, K = 7
// Output: [181,292,707,818,929]
// Explanation: Note that 070 is not a valid number, because it has leading zeroes.
// Example 2:

// Input: N = 2, K = 1
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

var numsSameConsecDiff = function(N, K) {
    let result = [];
    if (N <= 1) {
       for (let m = 0; m < 10; m++) {
           result.push(m);
       }
    } else {
        for (let j = 1; j <= 9; j++) {
            if (j - K >= 0) {
                let temp = [];
                temp.push(j);
                if (N >= 2) {
                    for (let i = 1; i < N; i++) {
                        if (i % 2) {
                            temp.push(j - K);
                        } else {
                            temp.push(j);
                        }
                        
                    }
                }
                result.push(temp.join(''));
            }
            if (j + K < 10) {
                let temp = [];
                temp.push(j);
                if (N >= 2) {
                    for (let i = 1; i < N; i++) {
                        if (i % 2) {
                            temp.push(K + j);
                        } else {
                            temp.push(j);
                        }
                        
                    }
                }
                let val = temp.join('');
                if (result.indexOf(val) === -1 ) result.push(val);
            }
        }
    }
    return result;
};

console.log(numsSameConsecDiff(3, 7));
console.log(numsSameConsecDiff(2, 1));
console.log(numsSameConsecDiff(1, 0));
console.log(numsSameConsecDiff(2, 0));