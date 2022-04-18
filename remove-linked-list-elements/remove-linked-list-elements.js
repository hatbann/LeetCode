/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head;
    let prev;
    while(cur !== null){
        if(head.val === val){
            head = head.next;
            cur = head;
            continue;
        }
        else if(cur === head && head.val !== val){
            cur = head.next;
            prev = head;
        }
        
        if(cur === null) break;
        if(cur.val === val){
            prev.next = cur.next
            cur = cur.next;
        }
        else{
            cur = cur.next;
            prev = prev.next;
        }
    }
    

    return head;
};