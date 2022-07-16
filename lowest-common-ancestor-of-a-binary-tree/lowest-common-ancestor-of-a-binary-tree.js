/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function Traversal(root, p, q){
    if(!root || root === p || root===q) return root;
    
    let left = Traversal(root.left, p, q);
    let right = Traversal(root.right, p, q);
    
    return (left&&right) ? root : (left || right);
}

var lowestCommonAncestor = function(root, p, q) {
    
    
    return Traversal(root, p, q);
};