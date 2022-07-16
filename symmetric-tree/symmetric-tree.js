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
 * @return {boolean}
 */
function mirror(left, right){
    if(!left && !right) return true;
    
    if(!left || !right || left.val !== right.val) return false;
    
    if(!mirror(left.left, right.right)) return false;
    if(!mirror(left.right, right.left)) return false;
    
    return true;
}


var isSymmetric = function(root) {
    if(!root) return false;
    
    return mirror(root.left, root.right);
};