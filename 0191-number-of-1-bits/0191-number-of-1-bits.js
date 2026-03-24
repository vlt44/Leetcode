/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n != 0) {
        let isOne = n & 1;
        if (isOne === 1) count++;

        n = n >>> 1
    }

    return count;
};