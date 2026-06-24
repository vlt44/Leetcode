/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charCount = {};

    for (const char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let total = 0;

    for (const word of words) {
        const wordCount = { ...charCount };
        let canForm = true;

        for (const char of word) {
            if (!wordCount[char]) {
                canForm = false;
                break;
            }

            wordCount[char]--;
        }

        if (canForm) total += word.length;
    }

    return total;
};