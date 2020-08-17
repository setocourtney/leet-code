// Non-Overlapping Intervals
// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
// Example 2:

// Input: [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
// Example 3:

// Input: [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

var eraseOverlapIntervals = function(intervals) {
    // return 0 if intervals is empty
    if (intervals.length < 1) return 0;

    // sort intervals in ascending order by interval end then interval start
    let sorted = intervals.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    
    // initialize count of intervals to erase
    let count = 0;

    // index for start of interval to evaluate
    let left = 0;
    // index for traversing intervals
    let right = 1;

    // stop if right index exeeds number of intervals
    while (right < intervals.length) {
        if (intervals[right][0] < intervals[left][1]) {
            // start of next interval is less than end of previous interval - there is overlap
            count++;
            if (intervals[right][1] < intervals[left][1]) {
                // end of next interval is less than (not equal to) end of current interval
                //increase index for start of interval
                left = right;
            }
        } else {
            //increase index for start of interval
            left = right;
        }
        // traverse to next interval
        right++;
    }
    return count;
    
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));

/* ------------------------------------- */

/*  Result: 56%
    Runtime:
        best case: O(1)
        worst case: O(2n)
        average case: O(2n))
    Space: O(n)
    Time to Complete: 30 min

*/
