/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function recurse(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) return null;

        let rootVal = preorder[preStart];
        let inIndex = inorder.indexOf(rootVal);
        let nLeft = inIndex - inStart;

        let root = new TreeNode(rootVal);

        root.left = recurse(preStart + 1, preStart + nLeft, inStart, inEnd - 1)
        root.right = recurse(preStart + 1 + nLeft, preEnd, inIndex + 1, inEnd);

        return root;
    }

    return recurse(0, preorder.length - 1, 0, inorder.length - 1);
};