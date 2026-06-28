/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const freq = new Map();
    let maxNum = 0;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        maxNum = Math.max(maxNum, num);
    }

    let answer= 1;

    for (const num of freq.keys()) {
        if (num === 1) {
            const count = freq.get(1);
            answer = Math.max(answer, count % 2 === 1 ? count : count - 1);
            continue;
        }

        let curr = num;
        let length = 1;

        while (freq.get(curr) >= 2 && curr <= Math.sqrt(maxNum) && freq.has(curr * curr)) {
            length += 2;
            curr = curr * curr;
        }

        answer = Math.max(answer, length);
    }

    return answer;
};