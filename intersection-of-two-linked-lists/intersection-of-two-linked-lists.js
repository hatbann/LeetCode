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

/*
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a;
};

*/
var getIntersectionNode = function(headA, headB){
  let indexA = headA, indexB = headB;
  let lenA = 0, lenB = 0;
    
  while(indexA){
      lenA ++;
      indexA = indexA.next;
  }
    while(indexB){
        lenB ++;
        indexB = indexB.next;
    }
    if(indexA !== indexB) return null;
    
    indexB = headB;
    indexA = headA;
    if(lenA < lenB){
        let lenDiff = lenB-lenA;
        for(let i = 0; i<lenDiff; i++){
            indexB = indexB.next;
        }
    }
    else{
        let lenDiff = lenA-lenB;
        for(let i = 0; i<lenDiff; i++){
            indexA = indexA.next;
        }
    }
    
    while(indexA!==indexB){
        indexA = indexA.next;
        indexB = indexB.next;
    }
    return indexA;
    
};