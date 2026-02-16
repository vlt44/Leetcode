/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        helper(left, right);
        helper(left, right + 1);
    }

    function helper(left, right) {
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    return count;
};