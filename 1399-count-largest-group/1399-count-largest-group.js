/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let output  = 0;
    let maxSize = 0;
    let count = {};

    for (let i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        count[sum] = (count[sum] | 0) + 1;
        maxSize = Math.max(maxSize, count[sum]);
    }

    for (let key in count) {
        if (count[key] === maxSize) {
            output++;
        }
    }

    return output;
};