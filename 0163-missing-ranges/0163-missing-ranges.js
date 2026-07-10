/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let result = [];
    let nextExpected = lower;

    for (let num of nums) {
        if (num < nextExpected) continue;

        if (num > nextExpected) {
            result.push([nextExpected, num - 1]);
        }

        nextExpected = num + 1;
    }

    if (nextExpected <= upper) {
        result.push([nextExpected, upper]);
    }

    return result;
};