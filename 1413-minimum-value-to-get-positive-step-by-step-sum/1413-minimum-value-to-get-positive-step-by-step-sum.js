/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sumUp = 0;
    let minSum = 1;

    for (let num of nums) {
        sumUp += num;

        minSum = Math.min(sumUp, minSum);
    }

    if(minSum > 0) return 1;

    return (-1 * minSum + 1);
};