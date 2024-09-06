/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let node = head;
    let prev = null;
    const set = new Set(nums);
    let retval = null;
    while(node){
        if(set.has(node.val)){
            // remove
            if(prev){
                prev.next = node.next;
            }
            node = node.next;
        }else {
            if(!retval){
                // if not remove and retval is null, this is the first none remove so set init it
                retval = node;
            }
            prev = node;
            node = node.next;
           
        }

    }
    return retval;
};