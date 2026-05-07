/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function recurse(root, currSum) {
        if (root === null) return false;

        currSum += root.val;

        if (!root.left && !root.right) {
            return currSum === targetSum;
        }

        return recurse(root.left, currSum) || recurse(root.right, currSum);
    }

    return recurse(root, 0);
};