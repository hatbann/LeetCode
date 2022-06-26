/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let originHead = head;
    let currentHead = head;
    
    if(originHead === null) return head;
    
    while(originHead.next !== null){
        let index = originHead.next;
        originHead.next = index.next;
        index.next = currentHead;
        currentHead = index;
    }
    head = currentHead;
    return head;
};