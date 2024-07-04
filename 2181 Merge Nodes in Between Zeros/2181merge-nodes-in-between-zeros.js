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
var mergeNodes = function(head) {
    
    const dummy = head;
    let cur = head;

    while(cur){
        let next = cur.next;
        while(next && next.val !== 0){
            cur.val += next.val;
            next = next.next;
        }
        if(next.next === null){
            cur.next = null;
            break;
        }
        cur.next = next;
        cur = next;
    }

    return dummy;
};