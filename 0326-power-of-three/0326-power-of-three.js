/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // recursive solution
    // if (n === 1) return true;
    // if (n <= 0) return false;
    // if (n % 3) return false;
    // return isPowerOfThree(n / 3);

    return n > 0 && (3**19) % n === 0;
};