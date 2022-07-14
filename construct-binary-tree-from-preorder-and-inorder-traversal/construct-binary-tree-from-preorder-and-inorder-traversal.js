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
    preorder.reverse();
    
    
    function BFS(arr){
        if(!arr.length) return null;
        let rootVal = preorder.pop();
        let idx = arr.indexOf(rootVal);
        let newNode = new TreeNode(rootVal);
        newNode.left = BFS(arr.slice(0, idx));
        newNode.right = BFS(arr.slice(idx+1));
        
        return newNode;
    }
    
    return BFS(inorder);
};