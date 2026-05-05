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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];

    function dfs(root, currSum, currArr) {
        if (root === null) return [];

        currSum += root.val;
        currArr.push(root.val);

        if (!root.left && !root.right && currSum == targetSum) {
            res.push([...currArr]);
        }

        dfs(root.left, currSum, currArr);
        dfs(root.right, currSum, currArr);
        currArr.pop();
    }

    dfs(root, 0, []);
    return res;
};