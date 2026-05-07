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
var sumNumbers = function(root) {
    let res = [];
    function recurse(root, currArr) {
        if (root === null) return 0;

        currArr.push(root.val);

        if (!root.left && !root.right) {
            let newNum = Number(currArr.join(''));
            res.push(newNum)
        }

        recurse(root.left, currArr);
        recurse(root.right, currArr);
        currArr.pop();
    }

    recurse(root, []);

    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }

    return sum;
};