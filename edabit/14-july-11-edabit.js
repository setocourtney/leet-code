// Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2

const countTrue = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.reduce((cum, val) => cum += val);
    }
}

//Write a function that converts hours into seconds.
//howManySeconds(2) ➞ 7200

const howManySeconds = (hours) => {
    return hours * 3600;
}

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = function() { return `Title: ${this.title}`; };
    this.getAuthor = function() { return `Author: ${this.author}`; };
}

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     getTitle() {
//         return `Title: ${this.title}`;
//     }

//     getAuthor() {
//         return `Author: ${this.author}`;
//     }
// }

let PP = new Book("Pride and Prejudice", "Jane Austen");
let H = new Book("Hamlet", "William Shakespeare");
let WP = new Book("War and Peace", "Leo Tolstoy");

// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

const sevenBoom = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let splice = arr[i].toString();
        if (splice.includes("7")) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}

// const sevenBoom = (arr) => {
//     return arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7 in the array";
// }

// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.
// getLength([1, [2, 3]]) ➞ 3

const getLength = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let newArr = arr.join(",");
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === ",") {
            count++;
        }
    }
    count++;
    return count;
}
