/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let index = head;
    while(index){
        len++;
        index = index.next;
    }
    
    if(len ===n) {
        head = head.next;
        return head;
    }
                            
    len = len-n;
    
    
    index = head;
    for(let i = 0; i<len-1; i++){
        index = index.next;
    }
    index.next = index.next.next;
    return head;
    
    
};