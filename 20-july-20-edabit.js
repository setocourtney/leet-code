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

// console.log( reverseOdd("Bananas") );
// console.log( reverseOdd("One two three four") );
// console.log( reverseOdd("Make sure uoy only esrever sdrow of ddo length") );

// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

const commonElements = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    while ( i < arr1.length && j < arr2.length ) {
        if ( arr1[i] === arr2[j])  { 
            if ( result.indexOf(arr1[i]) < 0 ) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
        else if ( arr2[j] > arr1[i] ) {
            i++;
        } else {
            j++
        }
    }
    return result;
}

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]);
commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]);
commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]);
commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]);