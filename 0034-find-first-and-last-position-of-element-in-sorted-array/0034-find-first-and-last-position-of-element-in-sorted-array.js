/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftBound = -1;
    let rightBound = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] == target && nums[mid - 1] !== target) {
            leftBound = mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target && nums[mid + 1] !== target) {
            rightBound = mid;
        }

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [leftBound, rightBound];
};