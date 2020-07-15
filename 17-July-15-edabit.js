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

console.log(alternateSort([-2, "f", "A", 0, 100, "z"]));