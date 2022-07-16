/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    if(root.left && root.right){
        root.left.next = root.right;
    }else{
        return root;
    }
    
    if(root.left.next && root.left.right){
        root.left.right.next = root.right.left;
    }
    if(root.right.next && root.right.right){
        root.right.right.next = root.right.next.left;
    }
    connect(root.left);
    connect(root.right);
    
    return root;
};