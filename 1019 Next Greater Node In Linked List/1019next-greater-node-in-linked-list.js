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
var nextLargerNodes = function(head) {
    const stack = [];
    let i = 0;
    let cur = head;
    const res = [];
    while(cur){
        const curE = cur.val;
        while(stack.length && stack.at(-1)[0] < curE){
            const [_, idx] = stack.pop();
            res[idx] = curE;
        }
        stack.push([curE, i]);
        i++;
        cur = cur.next;
    }

    const lookup = Array(i).fill(0);

    for(let x = 0; x < i; x++){
        if(res[x] !== undefined){
            lookup[x] = res[x];
        }
    }

    return lookup;
    

};