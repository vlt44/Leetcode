/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let maxDrinks = numBottles;
    let remainder = 0;

    while (numBottles >= numExchange) {
        remainder = numBottles % numExchange;
        numBottles = Math.floor(numBottles / numExchange);
        maxDrinks += numBottles;
        numBottles += remainder;
    }

    return maxDrinks;
};