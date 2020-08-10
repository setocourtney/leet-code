// Excel Sheet Column Number

// Given a column title as appear in an Excel sheet, return its corresponding column number.

/* For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 */

// recurrsion
const titleToNumber = (s) => {
    // ASCII A -> Z = 65 -> 90
    let len = s.length;
    if (len === 0) {
        return 0;
    } else if (len === 1) {
        return s.charCodeAt(0) - 65 + 1;
    } else {
        return titleToNumber(s.substring(0, len - 1)) * 26 + titleToNumber(s[len - 1]);
    }
}

// refactored 
const titleToNumber2 = (s) => {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res = res * 26 + s.charCodeAt(i) - 65 + 1;
    }
    return res;
}

console.log(titleToNumber("AB"));

/* ------------------------------------------------------------------------ */

/*  Result: 70.1%
    Runtime:
        best case: O(1)
        worst case: O(n)
        average case: O(n)
    Space: O(1)
    Time to Complete: 60 min

*/
