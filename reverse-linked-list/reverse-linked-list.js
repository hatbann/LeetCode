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
    let prev = null;
    let cur = head;
    while(cur){
        let next = cur.next;  //next는 현재의 다음값으로 설정
        cur.next = prev; //현재의 다음을 prev로
        prev = cur;  //과거는 현재가 
        cur = next; //현재는 미래가 된다.
    }
    return prev;
};