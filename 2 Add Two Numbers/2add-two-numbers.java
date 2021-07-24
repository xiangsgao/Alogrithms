/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode retVal = new ListNode();

        ListNode currentNode = retVal;
        int carry = 0;
        while((l1 != null) || (l2 != null)){
            int valueOfl1 = l1  == null ? 0 : l1.val;
            int valueOfl2 = l2 == null ? 0 : l2.val;
            if(l1 != null) l1 = l1.next;
            if(l2 != null) l2 = l2.next;
            int sum = valueOfl1 + valueOfl2;
            sum += carry;
            int currentNodeValue = sum >= 10 ? sum - 10 : sum;
            currentNode.val = currentNodeValue;
            carry = sum >= 10 ? 1 : 0;

            // make sure no extra node if both are now null
            if((l1 != null) || (l2 != null)){
                ListNode nextNode = new ListNode();
                currentNode.next = nextNode;
                currentNode = nextNode;
            }
        }

        // if there is a carry then we need to add a final node
        if(carry > 0){
            ListNode lastNode = new ListNode(1);
            currentNode.next = lastNode;
        }

        return retVal;
    }
}