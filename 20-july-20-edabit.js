// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// reverseOdd("Bananas") ➞ "sananaB"
// reverseOdd("One two three four") ➞ "enO owt eerht four"
// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

const reverseOdd = (str) => {
    let arr = str.split(" ");
    arr = arr.map(word => {
        if (word.length % 2 === 0) return word;
        else {
            let reverse = "";
            for (let char of word) {
                reverse = char.concat(reverse);
            }
            //[...w].reverse().join('');
            return reverse;
        }
    })
    return arr.join(" ");
}

console.log( reverseOdd("Bananas") );
console.log( reverseOdd("One two three four") );
console.log( reverseOdd("Make sure uoy only esrever sdrow of ddo length") );