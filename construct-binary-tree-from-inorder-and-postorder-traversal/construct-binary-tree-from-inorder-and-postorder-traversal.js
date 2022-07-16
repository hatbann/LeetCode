/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    function Traverse(arr){
        if(!arr.length) return null;
        let root = postorder.pop();
        let idx = arr.indexOf(root);
        let newnode = new TreeNode(root);
        newnode.right = Traverse(arr.slice(idx+1));
        newnode.left = Traverse(arr.slice(0, idx));
        return newnode;
    }
    return Traverse(inorder)
};