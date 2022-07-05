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
 * @return {number[]}
 */

function Traversal(root, list){
    if(!root) return;
    list.push(root.val);
    Traversal(root.left, list);
    Traversal(root.right, list);
}


var preorderTraversal = function(root) {
    let preTraversal = new Array();
    let index = root;
    Traversal(index,preTraversal);
    return preTraversal;
    
};