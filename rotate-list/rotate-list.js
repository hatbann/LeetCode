/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function getLength(head){
    let count = 0;
    while(head){
        count++;
        head = head.next;
    }
    return count;
}

var rotateRight = function(head, k) {
    let front = head, end = head, index = head;
    let count = getLength(index);
    if(head === null) return null;
    if(count === 1){return head;}
    
    if(k>count){
        k = k%count;
    }
    for(let i = 0; i<k; i++){
        while(end.next.next){
            end = end.next;
        }
        let changeToFirst = end.next;
        end.next = changeToFirst.next;
        changeToFirst.next = front;
        front = changeToFirst;
        end = front;
    }
    
    return front;
    
    
};