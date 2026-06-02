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
 * @return {number}
 */
var longestConsecutive = function(root) {
    let max = -Infinity;
    let prev = -Infinity;
    let count = 0;

    function dfs(root,count, prev) {
        if (root === null) return;

        if (root.val - 1 === prev) {
            count++;
        } else {
            count = 1;
        }

        max = Math.max(max, count);
        dfs(root.left, count, root.val);
        dfs(root.right, count, root.val);
    }

    dfs(root, count, prev);

    return max === -Infinity ? 0 : max;
};