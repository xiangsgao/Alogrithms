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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        if(list1 == null && list2 == null) return null;
        if(list1 == null) return list2;
        if(list2 == null) return  list1;

        ListNode currentL1 = list1;
        ListNode currentL2 = list2;
        ListNode current = null;
        do{
            ListNode next;
            if(currentL1.val < currentL2.val){
                next = currentL1;
                currentL1 = currentL1.next;
            }else{
                next = currentL2;
                currentL2 = currentL2.next;
            }
            if(current == null){
                current = next;
            }else{
                current.next = next;
                current = next;
            }
        }while (currentL1 != null && currentL2 != null);

        if(currentL1 != null){
            current.next = currentL1;
        }

        if(currentL2 != null){
            current.next = currentL2;
        }

        return  list1.val < list2.val ? list1 : list2;
        
    }
}