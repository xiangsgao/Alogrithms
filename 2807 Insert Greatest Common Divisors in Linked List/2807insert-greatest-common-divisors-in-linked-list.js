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

 const getGcd = (a, b) =>{
    while(b !== 0){
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
 }
var insertGreatestCommonDivisors = function(head) {
    const dummy = new ListNode();
    dummy.next = head;
    while(head.next){
        const next = head.next;
        const valOne = head.val;
        const valTwo = next.val;
        const gcd = getGcd(valOne, valTwo);
        const newNode = new ListNode(gcd);
        head.next = newNode;
        newNode.next = next;
        head = next;
    }

    return dummy.next;
};