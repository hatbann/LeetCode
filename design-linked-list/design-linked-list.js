class LinkNode{
    constructor(val, next){
        this.val = val === undefined ? undefined : val;
        this.next = next === undefined ? null : val;
    }
};
    
var MyLinkedList = function() {
    this.head = null;
};

MyLinkedList.prototype.getLength = function(){
    let len = 0;
    let cur = this.head;
    while(cur !== null){
        len++;
        cur = cur.next;
    }
    return len;
}


/** 
 *index가 valid하면 가져오기
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.getLength()) return -1;
    if(index === 0){return this.head.val;}
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
    let newnode = new LinkNode(val);
    if(this === null) {
        this.head = newnode;
        return;
    }
    newnode.next = this.head;
    this.head = newnode;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newnode = new LinkNode(val);
    if(this.head === null){
        this.addAtHead(val);
        return;
    }
    let len = this.getLength();
    let cur = this.head;
    for(let i = 0; i<len-1; i++){
        cur = cur.next;
    }
    cur.next = newnode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let len = this.getLength();
    if(index < 0 || index > len){ console.log("here"); return;}
    let newnode = new LinkNode(val);
    let cur = this.head;
    if(this.head === null) {
        this.head = newnode;
        return;
    }
    if(index === 0){
        this.addAtHead(val);
        return;
    }
    if(index === len){
        this.addAtTail(val);
        return;
    }
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
    let len = this.getLength();
    if(index < 0 || index >= len){
        return;
    }
    if(index ===0){
        this.head = this.head.next;
        return;
    }
    let cur = this.head;
    for(let i = 0; i<index-1; i++){
        cur = cur.next;
    }
    cur.next = cur.next.next;
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