/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null;
    
    let slower = head;
    let faster = head;
    while(slower && faster){
        if(faster.next === null) return null;
          slower = slower.next;
          faster = faster.next.next;
          if(slower=== faster) {
              slower = head;
              while(slower!== faster){
                  slower = slower.next;
                  faster = faster.next;
              }
              return slower;
          }
          }
    return null;

};