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