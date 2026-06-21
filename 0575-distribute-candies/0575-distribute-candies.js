/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candySet = new Set(candyType);

    return Math.min(candySet.size, candyType.length / 2);
};