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
var zigzagLevelOrder = function(root) {
    
    if (!root) return [];
    
    const queue = [root];
    let res = [];
    let depth = 0;

    while (queue.length) {
        const level = [];
        let levelSize = queue.length;

        while (levelSize) {
            const current = queue.shift();

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);

            if (depth % 2 === 0) {
                level.push(current.val);
            } else {
                level.unshift(current.val);
            }
            levelSize--;
        }

        res.push(level);
        depth++;
    }

    return res;
};