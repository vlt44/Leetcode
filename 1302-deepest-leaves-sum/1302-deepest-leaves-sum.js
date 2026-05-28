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
var deepestLeavesSum = function(root) {
    let sum = 0;
    let deepestLevel = 0;

    function dfs(root, level) {
        if (!root) return;

        if (level === deepestLevel) {
            sum += root.val;
        } else  if (level > deepestLevel) {
            deepestLevel = level;
            sum = root.val;
        }

        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }

    dfs(root, 0);
    return sum;
};