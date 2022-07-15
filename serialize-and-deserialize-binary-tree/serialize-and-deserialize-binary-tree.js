/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */


var serialize = function(root) {
    let answer = '';
    
    function getString(node){
        if(!node){
            answer += 'e ';
         }else{
             answer += node.val + ' ';
            getString(node.left);
            getString(node.right);
        }
    }

    getString(root);
    return answer;

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(' ');
    
    function makeTree(){
        let val = nodes.shift();
        
        if(val === 'e'){
            return null;
        }else{
            let tree = new TreeNode(val);
            tree.left = makeTree();
            tree.right = makeTree();
            return tree;
        }
    }
    return makeTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */