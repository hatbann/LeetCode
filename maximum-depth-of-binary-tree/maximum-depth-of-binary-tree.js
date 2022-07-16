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
var maxDepth = function(root) {
    if(!root) return 0;
    let depth = 1, level = 1;
    
    function Traversal(tree, level){
        if(!tree) return;
        
        if(level>depth) depth = level;
        Traversal(tree.left, level+1);
        Traversal(tree.right, level+1);
    }
    Traversal(root, level);
    return depth;
};