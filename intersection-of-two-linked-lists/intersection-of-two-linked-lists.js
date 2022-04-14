/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === headB) return headA;
    if(headA === null|| headB === null) return null;
    
    let Apointer = headA, Bpointer = headB;
    while(Apointer){
        if(Apointer === Bpointer){
            return Apointer;
        }
        if(Bpointer.next === null){
            Bpointer = headB;
            Apointer = Apointer.next;
        }
        else{
                 Bpointer = Bpointer.next;   
        }
    }
};