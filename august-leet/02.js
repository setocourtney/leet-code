// Design HashSet

/*  Problem Statement:

    Design a HashSet without using any built-in hash table libraries.

    To be specific, your design should include these functions:

    add(value): Insert a value into the HashSet. 
    contains(value) : Return whether the value exists in the HashSet or not.
    remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

*/

/*  Example:

    MyHashSet hashSet = new MyHashSet();
    hashSet.add(1);         
    hashSet.add(2);         
    hashSet.contains(1);    // returns true
    hashSet.contains(3);    // returns false (not found)
    hashSet.add(2);          
    hashSet.contains(2);    // returns true
    hashSet.remove(2);          
    hashSet.contains(2);    // returns false (already removed)

*/

/*  Assumptions: 

    All values will be in the range of [0, 1000000].
    The number of operations will be in the range of [1, 10000].
    Please do not use the built-in HashSet library.

*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.set = {};
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.set[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    delete this.set[key];
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.set[key] || false;
};

/* Test Cases:

    var obj = new MyHashSet();
    obj.add(1);
    obj.add(2);
    obj.remove(1);
    var param_2 = obj.contains(2);
    var param_1 = obj.contains(1);
    console.log(param_2);
    console.log(param_1);

*/



/* ------------------------------------------------------------------------ */

/*  Result: 85.27%
    Runtime:
        best case: O(1)
        worst case: O(1)
        average case: O(1)
    Time to Complete: 30 min

*/