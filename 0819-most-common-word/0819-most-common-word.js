/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let bannedSet = new Set(banned);
    let map = {};
    let wordArr = paragraph.toLowerCase().match(/[a-z]+/g);

    for (let i  = 0; i < wordArr.length; i++) {
        if (!bannedSet.has(wordArr[i])) {
            map[wordArr[i]] = (map[wordArr[i]] | 0) + 1;
        }
    }

    let maxCount = 0;
    let maxWord = '';

    for (let key in map) {
        if (map[key] > maxCount) {
            maxWord = key;
            maxCount = map[key]
        }
    }

    return maxWord;
};