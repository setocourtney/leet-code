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

var findDuplicatesRefactored = function(nums) {
    let result = [];
    if (nums.length === 2 && nums[0] === nums[1]) {
        return [nums[0]];
    };
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i])] >= 0) {
            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])];
        } else if (Math.abs(nums[i]) !== nums.length) {
            result.push(Math.abs(nums[i]));
        }
    }
    return result;
};

console.log(findDuplicatesRefactored([4,3,2,7,8,2,3,1]));

/* ------------------------------------------------------------------------ */

/*  Result: 33.3%
    Runtime:
        best case: O(n) - due to reverse()
        worst case: O(2n)
        average case: O(n)
    Time to Complete: 25 min

*/