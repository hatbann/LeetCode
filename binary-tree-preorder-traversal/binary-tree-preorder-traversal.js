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


var preorderTraversal = function(root) {
    let answer = [];
    
    function Traversal(tree){
        if(!tree) return;
        answer.push(tree.val);
        if(tree.left) Traversal(tree.left);
        if(tree.right) Traversal(tree.right);
    }
    Traversal(root);
    return answer;
};