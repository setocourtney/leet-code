// Multiple Pointers


// * create values that correspond to an index/position and move towards beginning/end/middle
// * use separate pointers (indices) for different positions that only change based on case - not loops

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