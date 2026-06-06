/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    // recursive solution
    // if (n === 1) return true;
    // if (n <= 0) return false;
    // if (n % 4 !== 0) return false;
    // return isPowerOfFour(n / 4);

    return n > 0 && Math.log2(n) % 2 === 0;
};