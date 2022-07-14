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
    
    function DFS(arr){
        if(!arr.length) return null;
        let rootVal = postorder.pop();
        let idx = arr.indexOf(rootVal);
        let newNode = new TreeNode(rootVal);
        newNode.right = DFS(arr.slice(idx + 1));
        newNode.left = DFS(arr.slice(0, idx));
        
        return newNode;
        
    }
    
    return DFS(inorder);

};