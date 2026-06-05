/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // ** SPOTIFY QUESTION **

    // solution with buil-in methods
    // const words = s.trim().split(" ");
    // return words[words.length - 1].length;

    let i = s.length - 1;
    let count = 0;

    while (i >= 0) {
        if (s[i] === " " && count > 0) {
            return count;
        } else if (s[i] != " ") {
            count++
        }
        i--;
    }
    return count;
};