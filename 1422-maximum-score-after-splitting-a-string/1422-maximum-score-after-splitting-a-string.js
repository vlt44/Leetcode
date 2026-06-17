/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let maxScore = 0;
    let leftScore = 0;
    let rightScore = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            rightScore++;
        }
    } 

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '1') {
            rightScore--;
        } else {
            leftScore++;
        }

        if (maxScore < rightScore + leftScore) {
            maxScore = rightScore + leftScore;
        }
    }

    return maxScore;
};