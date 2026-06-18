/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let output = new Array(2);
    let map = {};
    let totalA = 0;
    let totalB = 0;

    for (let i = 0; i < aliceSizes.length; i++) {
        totalA += aliceSizes[i];
    }

    for (let i = 0; i < bobSizes.length; i++) {
        totalB += bobSizes[i];
        map[bobSizes[i]] = true;
    }

    let delta = (totalB - totalA) / 2;

    for (let i = 0; i < aliceSizes.length; i++) {
        if (map[aliceSizes[i] + delta]) {
            output[0] = aliceSizes[i];
            output[1] = aliceSizes[i] + delta;

            return output;
        }
    }
};