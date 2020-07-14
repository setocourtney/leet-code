// Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):

// C. B.
// C. M. B.
// Rules for a valid initial:

// Each letter must be upper case.
// Each letter must be immediately followed by a period.
// There must be exactly one space separating each letter-period pair.
// Leading or trailing whitespaces are valid.

// "C. B." ➞ true

let x = /^ *([A-Z]\.)( [A-Z]\.){1,2} *$/;

// Create a function that extracts the characters from an array (or a string) on odd or even positions, depending on the specifier. The string 'odd' for items on odd positions (1, 2, 3, ...) and 'even' for even positions (2, 4, 6, ...).

// Examples
// charAtPos([2, 4, 6, 8, 10], 'even') ➞ [4, 8]
// // 4 & 8 occupy the 2nd & 4th positions

// charAtPos('EDABIT', 'odd') ➞ 'EAI'
// // 'E', 'A' and 'I' occupy the 1st, 3rd and 5th positions

const charAtPos = (r, s) => {
    let result = [];
    for (let i = 0; i < r.length; i++) {
        if (i % 2 === 0 && s === 'odd' || i % 2 !== 0 && s === 'even') {
            result.push(r[i]);
        }
    }
    return Array.isArray(r) ? result : result.join("");
}