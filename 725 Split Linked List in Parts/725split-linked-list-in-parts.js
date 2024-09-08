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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    // get the arr
    const combined = [];

    while(head){
        combined.push(head);
        head = head.next;
    }
   
    const retval = [];
    if(k >= combined.length){
        
        for(let i = 0; i < k; i++){
            const cur = combined[i];
            if(cur){
                cur.next = null;
            }
            retval.push(cur ?? null);
        }

        return retval;
    }
    let remainder = combined.length % k;
    const equalParts = Math.floor(combined.length / k);

    let i = 0;
    while(i < combined.length){
        const cur = combined[i];
        retval.push(cur);
        let lastNodeIndex = i + equalParts - 1;
        if(remainder){
           lastNodeIndex += 1;
           remainder--; 
        }
        if(lastNodeIndex < combined.length){
              combined[lastNodeIndex].next = null;
        }
        i = lastNodeIndex + 1;
    }
    
    
    return retval;
};