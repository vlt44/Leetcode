/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let map = {
        type: 0,
        color: 1,
        name: 2
    }

    let index = map[ruleKey];
    let count = 0;

    for (let item of items) {
        if (item[index] === ruleValue) {
            count++;
        }
    }

    return count;
};