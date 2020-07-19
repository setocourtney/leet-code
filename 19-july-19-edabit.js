// Write a function that counts how many concentric layers a rug.

// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5

const countLayers = (rug) => {
	let middleRow = rug[Math.floor(rug.length / 2)];
  let count = 0;
  for (let i = 0; i < middleRow.length / 2; i++ ) {
    if (middleRow[i] !== middleRow[i + 1]) {
      count++;
    } else if (i + 1 === Math.floor(middleRow.length / 2)) {
			count++;
		}
  }
  return count;
}

console.log(countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]));