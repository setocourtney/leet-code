// Iterator for Combination

// Design an Iterator class, which has:

// A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
// A function next() that returns the next combination of length combinationLength in lexicographical order.
// A function hasNext() that returns True if and only if there exists a next combination.
 

// Example:

// CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

// iterator.next(); // returns "ab"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "ac"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "bc"
// iterator.hasNext(); // returns false

class CombinationIterator {
    constructor(characters, combinationLength) {
        this.characters = characters;
        this.combinationLength = combinationLength;
        this.combos = this.iterate('', 0);
    }

    iterate(str, index) {
        if (str.length === this.combinationLength) return [str];
        let result = [];
        for (let i = index; i < this.characters.length; i++) {
            result.push(...this.iterate(str + this.characters[i], i + 1)); // does not alter 'str'
        }
        return result;
    }

    hasNext() {
        return this.combos.length > 0
    }

    next() {
        return this.combos.shift();
    }
}

let combinator = new CombinationIterator("abc", 2);
console.log(combinator.hasNext());
console.log(combinator.next());
console.log(combinator.hasNext());
console.log(combinator.next());
console.log(combinator.hasNext());
console.log(combinator.next());
console.log(combinator.hasNext());