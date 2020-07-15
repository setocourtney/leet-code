// Write a function that sorts a given array in an alternative fashion. 
// The result should be a array sorted in ascending order (number then letter). 
// Array will contain equal amounts of integer numbers and single characters.
// alternateSort(["a", "b", "c", 1, 2, 3, 4]) ➞ [1, "a", 2, "b", 3, "c"]
// alternateSort([-2, "f", "A", 0, 100, "z"]) ➞ [-2, "A", 0, "f", 100, "z"]
// alternateSort(["X", 15, 12, 18, "Y", "Z"]) ➞ [12, "X", 15, "Y", 18, "Z"]

const alternateSort = (arr) => {
    let nums = [];
    let letters = [];
    let newArr = [];
    arr.forEach(element => {
        Number.isInteger(element) ? nums.push(element) : letters.push(element);
    })
    nums = nums.sort((a, b) => a - b);
    letters = letters.sort();
    for (let i = 0; i < nums.length || i < letters.length; i++) {
        i < nums.length ? newArr.push(nums[i]) : null;
        i < letters.length ? newArr.push(letters[i]) : null;
    }
    return newArr;
}

// A boomerang is a V-shaped sequence that is either upright or upside down. 
// Specifically, a boomerang can be defined as: sub-array of length 3, 
// with the first and last digits being the same and the middle digit being different.
// Boomerang Examples [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

const countBoomerangs = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        arr[i] === arr[i + 2] && arr[i + 1] !== arr[i] && arr[i + 1] !== arr[i + 2] ? count++ : null;
    }
    return count;
}
