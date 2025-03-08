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
 * @return {ListNode}
 */
 // cant solve because dont know how to maintain distance of second and cur
var swapNodes = function(head, k) {

    let first = head;
    let second = head;
    let i = 1;
    while(i < k){
        first = first.next;
        i++;
    }

    let cur = first;
    while(cur.next){
        cur = cur.next;
        second = second.next;
    }

    const firstVal = first.val;
    const secondVal = second.val;

    first.val = secondVal;
    second.val = firstVal;
   
    return head;
};