/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = new Map();

    function dfs(i, j) {
        let key = `${i},${j}`;

        if (memo.has(key)) return memo.get(key);

        if (j === p.length) return i === s.length;

        let match = i < s.length && (s[i] === p[j] || p[j] === '.');

        let result;

        if (j + 1 < p.length && p[j + 1] === '*') {
            result = dfs(i, j + 2) || (match && dfs(i + 1, j));
        } else {
            result = match && dfs(i + 1, j + 1);
        }

        memo.set(key, result);
        return result;
    }

    return dfs(0, 0);
};