/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let x = "";
    let sum = 0;

    for (let digit of String(n)) {
        if (digit !== "0") {
            x += digit;
            sum += Number(digit);
        }
    }

    x = x === "" ? 0 : Number(x);

    return x * sum;
};