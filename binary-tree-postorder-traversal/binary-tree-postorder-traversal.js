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
    Traversal(root.left, list);
    Traversal(root.right, list);
    list.push(root.val);
}

var postorderTraversal = function(root) {
    let TreeList = new Array();
    let index = root;
    Traversal(index, TreeList);
    return TreeList;
};