/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = nums1.concat(nums2).sort((a, b) => a - b);
    let middle = Math.floor(mergedArr.length / 2);

    if (mergedArr.length % 2 === 1) {
        return mergedArr[middle];
    }

    return (mergedArr[middle - 1] + mergedArr[middle]) / 2;
};