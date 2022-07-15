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

function recursive(root, p, q){
    if(!root || root === p  || root === q) return root;
    let left = recursive(root.left, p, q);
    let right = recursive(root.right, p, q);
    return (left && right) ? root : (left || right);
}

var lowestCommonAncestor = function(root, p, q) {
    
    return recursive(root, p, q);
};