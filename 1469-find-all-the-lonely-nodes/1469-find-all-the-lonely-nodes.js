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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    let res = [];

    function dfs(root) {
        if (!root) return;
        if (!root.left && root.right) res.push(root.right.val);
        if (!root.right && root.left) res.push(root.left.val);

        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);

    return res;
};