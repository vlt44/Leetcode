/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const start = 0;
    const end = 1;

    intervals = intervals.sort((a, b) => a[start] - b[start]);

    let prev = intervals[0];
    let res = [prev];

    for (let curr of intervals) {
        if (curr[start] <= prev[end]) {
            prev[end] = Math.max(prev[end], curr[end])
        } else {
            res.push(curr);
            prev = curr;
        }
    }
    return res;
};