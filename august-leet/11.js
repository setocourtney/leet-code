// H-Index

// Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

// Input: citations = [3,0,6,1,5]
// Output: 3 
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
//              received 3, 0, 6, 1, 5 citations respectively. 
//              Since the researcher has 3 papers with at least 3 citations each and the remaining 
//              two with no more than 3 citations each, her h-index is 3.

    // [0,1,3,5,6]
    // 0, 5 with more than 0, 0 with 0 or less, n-h = 5, 0 < 5  
    // 1, 1 with more than 1, 2 with 1 or less, n-h = 4, 2 < 4
    // 2, 3 with more than 2, 2 with 2 or less, n-h = 3, 2 < 3 c[2] >= 2 + 1, h = 2 + 1
    // 3, 3 with more than 3, 3 with 3 or less, n-h = 2, 3 > 2 xxx 
    // 4, 2 with more than 4, 3 with 4 or less, n-h = 1, 3 > 1
    // 5, 2 with more than 5, 4 with 5 or less, n-h = 1, 4 > 1  
    // 6, 1 with more than 6, 6 with 6 or less, n-h = 0, 6 > 0  

    // [11, 15]
    // 0, 2 with more than 0, 0 with 0 or less, n-h = 2, 0 < 2
    // 1, 2 with more than 1, 0 with 1 or less, n-h = 1, 0 < 1 c[1] = 15 > 1 + 1, h = 1 + 1
    // 2, 2 with more than 2, 0 with 2 or less, n-h = 0, 0 = 0 xxx

    // [100]
    // 0, 1 with more than 0, 0 with 0 or less, n-h = 1, 0 < 1 c[0] = 100 > 0 + 1, h = 0 + 1
    // 1, 1 with more than 1, 0 with 1 or less, n-h = 0, 0 = 0 xxx

var hIndex = function(citations) {
    const sorted = citations.sort((a, b) => b-a);
    let n = citations.length;
    let h = 0;
    if (n === 1 && sorted[0] === 0) return 0;
    for (let i = 0; i < n; i++) {
        if (sorted[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }
    return h;
};

console.log(hIndex([3,0,6,1,5]));
console.log(hIndex([100]));
console.log(hIndex([11,15]));

/*  Result: 81.66%
    Runtime:
        best case: O(1)
        worst case: O(n)
        average case: O(n)
    Space: O(n)
    Time to Complete: 30 min

*/
