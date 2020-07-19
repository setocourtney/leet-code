// Frequency Counter

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) { 
        return false;
    }
    let count = {};
    for (let char of str1) {
        count[char] ? count[char]++ : count[char] = 1;
    }
    for (let c of str2) {
        if (!count[c]) {
            return false;
        } else {
            count[c]--;
        }
    }
    return true;
}

console.log(validAnagram('aaz', 'zza'));

// Multiple Pointers

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum  = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(sumZero([-4, -3, -2, 0, 1, 2]));

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}