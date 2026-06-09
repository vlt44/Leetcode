/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let queue = [root];
    let res = [];

    while (queue.length) {
        let level = [];
        let levelSize = queue.length;

        while (levelSize) {
            let current = queue.shift();

            for (let i = 0; i < current.children.length; i++) {
                if (current.children[i]) queue.push(current.children[i]);
            }

            level.push(current.val);
            levelSize--;
        }
        
        res.push(level);
    }

    return res;
};