
// 5453. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function(nums) {
    return (nums.reduce(function(sum, num, index) {
        if (index === 0) {
            sum.push(num);
            
        } else {
            sum.push(sum[index - 1] + num);
        }
        return sum;
    }, []));
};

// 5454. Least Number of Unique Integers after K Removals
// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

var findLeastNumOfUniqueInts = function(arr, k) {
    if (arr.length <= k) {
        return 0;
    }
    let countObj = arr.reduce((accumulator, currentVal) => {
        if (currentVal in accumulator) {
            accumulator[currentVal]++;
        } else {
            accumulator[currentVal] = 1;
        }
        return accumulator;
    }, {})
    let count = Object.values(countObj).sort((a, b) => a - b);
    let removeK = k;
    for (let i = 0; i < count.length; i++) {
        if (removeK === 0) {
            return count.length;
        }
        if (count[i] <= removeK) {
            removeK -= count[i];
            count.shift();
            i--;
        } else {
            removeK = 0;
            i--;
        }
    }    
};