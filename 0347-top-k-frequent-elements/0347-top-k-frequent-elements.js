/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    let bucket = [];
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    for (let [num, freq] of Object.entries(map)) {
        num = Number(num);
        if (!bucket[freq]) {
            bucket[freq] = new Set().add(num);
        } else {
            bucket[freq] = bucket[freq].add(num);
        }
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) res.push(...bucket[i]);
        if(res.length === k) break;
    }

    return res;
};