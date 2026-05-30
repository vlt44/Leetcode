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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    let res = {};

    function dfs(root) {
        if (!root) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);
        let depth = Math.max(left, right);

        if (!res[depth]) {
            res[depth] = [root.val];
        } else {
            res[depth].push(root.val);
        }

        return depth + 1;
    }

    dfs(root);
    return Object.values(res);
};