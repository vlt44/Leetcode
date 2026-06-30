/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let freq = new Map();

    for (let word of s1.split(" ")) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    for (let word of s2.split(" ")) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    const result = [];

    for (let [word, count] of freq) {
        if (count === 1) {
            result.push(word);
        }
    }

    return result;
};