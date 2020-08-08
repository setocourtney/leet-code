// Add and Search Word

/*
 Design a data structure that supports the following two operations:

    void addWord(word)
    bool search(word)
    search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
*/

/* Tests:

    addWord("bad")
    addWord("dad")
    addWord("mad")
    search("pad") -> false
    search("bad") -> true
    search(".ad") -> true
    search("b..") -> true
*/

/**
 * Initialize your data structure here.
 */
class TrieNode {
    constructor(value = null) {
        this.value = value;
        this.children = [];
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode(); // null
    }

    addWord(word) {
        let current = this.root;
        for (let char of word) {
            // check if char is .
            // check children of current for each word char
            if (!current.children[char]) {
                // if child does not exist, add new node
                current.children[char] = new TrieNode(char);
            }
            // traverse to next char in word
            current = current.children[char];
        }
        // set last char in word to end
        current.isEnd = true;
    }

    // regular search
    // search(word) {
    //     let current = this.root;
    //     for (let char of word) {
    //         // check children of current for current char
    //         if (!current.children[char]) {
    //             // child does not exist
    //             return false;
    //         }
    //         // traverse to next char in word
    //         current = current.children[char];
    //     }
    //     // check if current node is end of word
    //     return current.isEnd;
    // }

    // search can include .
    search(word) {
        let searchHelper = function(current, index) {
            if (index === word.length && current.isEnd) return true;
            if (index === word.length) return false;
            if (word[index] === '.') {
                for (let child in current.children) {
                    if (searchHelper(current.children[child], index+1)) return true;
                }
                return false;
            }
            if (!current.children[word[index]]) return false;
            return searchHelper(current.children[word[index]], index+1);
        }
        return searchHelper(this.root, 0);
    }

    startsWith(prefix) {
        let current = this.root;
        for (let char of word) {
            // check children of current for current char
            if (!current.children[char]) {
                // child does not exist
                return false;
            }
            // traverse to next char in word
            current = current.children[char];
        }
        // children contains all chars in word
        return true;
    }
}

var obj = new WordDictionary()
obj.addWord("bad");
obj.addWord("dad");
obj.addWord("mad");
console.log(obj.search("pad"));
console.log(obj.search("bad"));
console.log(obj.search(".ad"));
console.log(obj.search("b.."));


/* ------------------------------------------------------------------------ */
/*  Result: 77%
    Runtime:
        best case: O(n)
        worst case: O(n)
        average case: O(n)
    Space: O(1)
    Time to Complete: 120 min

*/
