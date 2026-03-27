/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let visited = new Set();
    let set = new Set(wordDict);
    let queue = [0];

    while (queue.length) {
        let curr = queue.shift();

        if (!visited.has(curr)) {
            for (let i = curr + 1; i <= s.length; i++) {
                if (set.has(s.slice(curr, i))) {
                    if (i === s.length) {
                        return true;
                    }
                    queue.push(i);
                }
            }
            visited.add(curr);
        }
    }
    return false;
};