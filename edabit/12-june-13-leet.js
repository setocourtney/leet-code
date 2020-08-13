//  1470. Shuffle the Array
//  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//  Return the array in the form [x1,y1,x2,y2,...,xn,yn].
var shuffle = function(nums, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
};

// 1431. Kids With the Greatest Number of Candies
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        result.push((candies[i] + extraCandies) >= max);
    }
    return result;
};

// console.log(kidsWithCandies([2,3,5,1,3], 3));

