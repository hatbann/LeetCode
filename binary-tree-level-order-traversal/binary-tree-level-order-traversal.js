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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let queue = [root];
    let answer = [];
    
    while(queue[0]){
        let len = queue.length;
        let temp = [];
        for(let i = 0; i<len; i++){
            let cur = queue.shift();
            temp.push(cur.val);
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        answer.push(temp);
    }
    return answer;
};