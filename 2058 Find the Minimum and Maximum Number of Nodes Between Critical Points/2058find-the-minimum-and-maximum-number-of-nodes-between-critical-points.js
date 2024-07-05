/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */


// three pointer solution basically 
var nodesBetweenCriticalPoints = function(head) {
    let retvalMin = -1;
    let retvalMax = -1;

    const recursive = (node = head, first = -1, prev = -1, cur = 0, preVal = null) =>{
        if(node === null){
            if(retvalMin !== -1){
                retvalMax = Math.abs(first - prev);
            }
            return;
        }

        // this means beginning so can't be critical
        if(preVal === null){
            return recursive(head.next, first, prev, cur + 1, head.val);
        }

        // check if critical
        const lMax = node.val > preVal && node.val >(node.next?.val ?? Number.POSITIVE_INFINITY);
        const lmin = node.val < preVal && node.val < (node.next?.val ?? Number.NEGATIVE_INFINITY);
        if(lMax || lmin){
            if(first === -1){
                return recursive(node.next, cur, prev, cur + 1, node.val)
            }else if(prev === -1){
                retvalMin = cur - first;
                return recursive(node.next, first, cur, cur + 1, node.val)
            }else{
                retvalMin = Math.min(cur - prev, retvalMin);
                 return recursive(node.next, first, cur, cur + 1, node.val)
            }
        }

        recursive(node.next, first, prev, cur + 1, node.val)
    }

    recursive()
    return [retvalMin, retvalMax];
}; 