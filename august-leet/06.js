// Find All Duplicates in Array

/*
    Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
    Find all the elements that appear twice in this array.
    Could you do it without extra space and in O(n) runtime?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
    }
    return Object.keys(count).filter(num => count[num] > 1);
};
/* ------------------------------------------------------------------------ */

/*  Result: 33.3%
    Runtime:
        best case: O(n) - due to reverse()
        worst case: O(2n)
        average case: O(n)
    Space: O(n)
    Time to Complete: 25 min

*/

var findDuplicatesRefactored = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
        } else {
            result.push(Math.abs(nums[i]));
        }
    }
    return result;
};

console.log(findDuplicatesRefactored([4,3,2,7,8,2,3,1]));

/* ------------------------------------------------------------------------ */
/*  Result: 82%
    Runtime:
        best case: O(n) - due to reverse()
        worst case: O(2n)
        average case: O(n)
    Space: O(1)
    Time to Complete: 60 min

*/
