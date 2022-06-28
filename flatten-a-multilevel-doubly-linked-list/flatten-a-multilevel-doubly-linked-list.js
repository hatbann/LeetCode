/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(head === null) return;
    let dummyHead = new Node(0, null, head, null);
    
    let stack = [head];
    let curr = dummyHead;
    let prev = null;
    
    while(stack.length !==0){
        curr = stack.pop();
        
        if(prev){
            curr.prev = prev;
            prev.next = curr;
        }
        
        if(curr.next !== null) stack.push(curr.next);
        if(curr.child !== null) { //child가 있는 경우
            stack.push(curr.child);
            curr.child = null;
        }      
        
        prev = curr;
    }
    
    return dummyHead.next;
    
};