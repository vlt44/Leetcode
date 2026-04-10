/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let index = 0;
    let isNeg = false;
    let res = 0;

    for (let i = index; i < s.length; i++) {
        if (s[i] === " ") {
            index++;
        } else {
            break;
        }
    }

    if (s[index] == '-' || s[index] == '+') {
        isNeg = s[index] == '-';
        index++;
    }

    for (let i = index; i < s.length; i++) {
        let num = s.charCodeAt(i) - 48;

        if (num < 0 || num > 9) break;

        res *= 10;
        res += num;
    }

    if (isNeg) {
        res = -res;
    }

    let min = -(2**31);
    let max = 2**31-1;

    let minima = Math.min(max, res);

    return Math.max(minima, min);
};