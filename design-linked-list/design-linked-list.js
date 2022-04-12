//노드 생성
class LinkedNode{
    constructor(val, next){
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

//Linked list 생성
var MyLinkedList = function() {
    this.head = null;
};


MyLinkedList.prototype.getLength = function(){
    let len = 0, cur = this.head;
    while(cur !== null){
        cur = cur.next;
        len++;
    }
    return len;
};


/** 
 * get value if index is in range of linked list
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.getLength()) return -1;
    let cur = this.head;
    for(let i = 0; i<index; i++){
        cur = cur.next;
    }
    return cur.val;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newnode = new LinkedNode(val)
    newnode.next = this.head;
    this.head = newnode;
};

/** 
 * if head is empty, you should add this value at head
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head === null){
        this.addAtHead(val);
        return;
    }
    let cur = this.head;
    while(cur.next !== null){
        cur = cur.next;
    }
    let newnode = new LinkedNode(val);
    cur.next = newnode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index === 0) {
        this.addAtHead(val); 
        return;}
    if(index === this.getLength()){
        this.addAtTail(val);
        return;
    }
    if(index > this.getLength()) return;
    
    let newnode = new LinkedNode(val);
    let cur = this.head;
    for(let i = 0; i<index-1; i++){
        cur = cur.next;
    }
    let next = cur.next;
    cur.next = newnode;
    newnode.next = next;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.getLength()) return;
    if(index ===0){
        this.head = this.head.next;
        return;
    }
    let cur = this.head;
    for(let i = 0; i<index-1; i++){
        cur = cur.next;
    }
    let deletenode = cur.next;
    cur.next = cur.next.next;
    deletenode.next = null;
    
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */