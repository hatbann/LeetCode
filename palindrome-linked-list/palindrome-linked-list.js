/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let index = head;
    let cnt = 0;
    while(index){
        cnt ++;
        index = index.next;
    }
    index = head;
    let idxcnt = cnt;
    if(cnt===1) return true;
    if(cnt%2 ===0){
        cnt = cnt/2;
    }else{
        cnt = Math.ceil(cnt/2);
    }

    let faster =head;
    for(let i = 0; i<cnt; i++){
        faster = faster.next;
    }
    let currentHead = faster;
    while(faster.next){
        let index = faster.next;
        faster.next = index.next;
        index.next = currentHead;
        currentHead = index;
    }
    faster = currentHead;
    if(idxcnt%2 === 0){
         for(let i = 0; i<cnt; i++){
            if(index.val !== faster.val) return false;
            index = index.next;
            faster = faster.next;
            }   
    }else{
        for(let i =0; i<cnt-1; i++){
            if(index.val !== faster.val) return false;
            index = index.next;
            faster = faster.next;
            }
    }
    return true;
    
};