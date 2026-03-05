/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prev = 0;

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];

        if (curr[0] < intervals[prev][1]) {
            count++
        } else {
            prev = i;
        }
    }

    return count;
};