/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let  deadendSet = new Set(deadends);
    let visited = new Set(['0000']);
    let queue = [["0000", 0]];

    while (queue.length) {
        let [current, count] = queue.shift();

        if (current === target) return count;
        if (deadendSet.has(current)) continue;

        for (let combo of possibleCombos(current)) {
            if (!visited.has(combo)) {
                visited.add(combo);
                queue.push([combo, count + 1]);
            }
        }
    }

    return -1;
};

const possibleCombos = (str) => {
    let ans = [];

    for (let i = 0; i < str.length; i++) {
        ans.push(str.slice(0, i) + ((+str[i] + 1) % 10) + str.slice(i + 1));
        ans.push(str.slice(0, i) + ((+str[i] + 9) % 10) + str.slice(i + 1));
    }

    return ans;
}