/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];

        if (stack.length === 0 || curr !== stack[stack.length - 1][0]) {
            stack.push([curr, 1]);
        } else {
            stack[stack.length - 1][1]++;
            if (stack[stack.length - 1][1] === k) stack.pop();
        }
    }

    let res = "";

    for (let [char, count] of stack) {
        res += char.repeat(count);
    }

    return res;
};