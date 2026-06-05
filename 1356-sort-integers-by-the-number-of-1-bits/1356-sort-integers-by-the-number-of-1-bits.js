/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let map = {};

    for (let a of arr) {
        let count = numberOfOnes(a);
        map[a] = count;
    }

    return arr.sort((a, b) => map[a] - map[b] || a - b);
};

function numberOfOnes(n) {
    let count = 0;

    while(n !== 0) {
        count += + n & 1;
        n= n >>> 1;
    }

    return count;
}