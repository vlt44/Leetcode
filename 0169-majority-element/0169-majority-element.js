/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let leader = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            leader = num;
        }

        count += num === leader ? 1 : -1;
    }

    return leader;
};