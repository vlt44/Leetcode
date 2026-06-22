/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n < 2) return n;

    let arr = new Array(n + 1).fill(0);
    let max = 0;
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[Math.floor(i / 2)];
            max = arr[i] > max ? arr[i] : max;
        } else {
            arr[i] = arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1];            
            max = arr[i] > max ? arr[i] : max;
        }
    }

    return max;
};