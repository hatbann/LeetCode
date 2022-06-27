/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    if(!list1 && !list2) return null;
    
    let mergedList = new ListNode();
    let changeList = mergedList;
    
    while(list1 && list2){
        if(list1.val < list2.val){
            changeList.next = list1;
            list1 = list1.next;
        }
        else{
            changeList.next = list2;
            list2 = list2.next;
        }
        changeList = changeList.next;
    }
    
    if(list1 === null) changeList.next = list2;
    if(list2 === null) changeList.next = list1;
    
    mergedList = mergedList.next;
    return mergedList;
 
    
    
    /*
    if(!list1 || !list2) {return list1? list1 : list2;}
    
    if(list1.val< list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    */
};