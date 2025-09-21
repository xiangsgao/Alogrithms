/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */

 /**
    couldnt solve,
    edge cases
    1) normal insert if cur val is <= insertval and insertval is <= next val then insert and return head;
    2) this is the tricky one, if the current is grater than the its next then we are at the end of this circle, it now circles back to the beginning.
    only insert here if the insertval is greater than the current or less than the next
  */
var insert = function(head, insertVal) {
    if(!head){
        const newNode = new _Node(insertVal);
        newNode.next = newNode;
        return newNode;
    }

    let cur = head;
    while(cur.next !== head){
       
        const next = cur.next;
        
        if(cur.val <= insertVal && insertVal <= next.val){
           const newNode = new _Node(insertVal, next);
            cur.next = newNode;
            return head;
        }else if(cur.val > next.val){
            if(insertVal >= cur.val || insertVal <= next.val){
                const newNode = new _Node(insertVal, next);
                cur.next = newNode;
                return head;
            }
        }

        cur = next;

    }

    //this means none of the above triggers and we are all the end of the loop list
    // remeber cur.next !== head? this means we still have to process the last node, cur.next. we are inserting this at the end
    const newNode = new _Node(insertVal, cur.next);
    cur.next = newNode;
    return head;

};