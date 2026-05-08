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
var minDepth = function(root) {
    if (root === null) return 0;

    let minDepth = 1;

    let queue = [root];

    while (queue.length) {
        let levelSize = queue.length;
        while (levelSize) {
            let current = queue.shift();
            if (current.left === null && current.right === null) {
                return minDepth;
            } else {
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
            levelSize--;
        }
        minDepth++
    }
    return minDepth;
};