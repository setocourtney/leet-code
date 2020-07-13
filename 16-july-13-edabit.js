// Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):

// C. B.
// C. M. B.
// Rules for a valid initial:

// Each letter must be upper case.
// Each letter must be immediately followed by a period.
// There must be exactly one space separating each letter-period pair.
// Leading or trailing whitespaces are valid.

// "C. B." ➞ true

let x = /\s*([A-Z]\.){2,3}\s*;