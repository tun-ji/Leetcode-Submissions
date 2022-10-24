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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root
    
    const swap = (node) =>  {
        var temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) swap(node.left)
        if (node.right) swap(node.right)
    }
    
    swap(root)
    
    return root
};