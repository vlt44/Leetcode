/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];

    for (let num = left; num <= right; num++) {
        let curr = num;
        let isSelfDividing = true;

        while (curr > 0) {
            let digit = curr % 10;

            if (digit === 0 || num % digit !== 0) {
                isSelfDividing = false;
                break;
            }

            curr = Math.floor(curr / 10);
        }

        if (isSelfDividing) res.push(num);
    }

    return res;
};