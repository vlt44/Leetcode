/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // recursion solution
    // if (n === 1) return true;
    // if (n < 1 || n % 2 !== 0) return false;
    // return isPowerOfTwo(n / 2);

    if ( n <= 0) return false;
    return (n & (n - 1)) === 0;
};