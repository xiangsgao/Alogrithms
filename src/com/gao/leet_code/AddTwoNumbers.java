package com.gao.leet_code;

import java.util.List;

public class AddTwoNumbers {


    public static void run() {
        ListNode[] nodesOne = new ListNode[]{
                new ListNode(9),
                new ListNode(9),
                new ListNode(9),
                new ListNode(9),
                new ListNode(9),
                new ListNode(9),
                new ListNode(9)
        };

        ListNode[] nodesTwo = new ListNode[]{
                new ListNode(9),
                new ListNode(9),
                new ListNode(9),
                new ListNode(9)
        };

        for(int i = 0; i < nodesOne.length - 1; i++){
            ListNode node = nodesOne[i];
            node.next = nodesOne[i + 1];
        }
        for(int i = 0; i < nodesTwo.length - 1; i++){
            ListNode node = nodesTwo[i];
            node.next = nodesTwo[i + 1];
        }
        ListNode result = addTwoNumbers(nodesOne[0], nodesTwo[0]);
        while(result != null){
            System.out.print(result.val);
            result = result.next;
        }
        System.out.println();
    }

    /**
     * You are given two non-empty linked lists representing two non-negative integers.
     * The digits are stored in reverse order, and each of their nodes contains a single digit.
     * Add the two numbers and return the sum as a linked list.
     * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
     * https://leetcode.com/problems/two-sum/
     */


      static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }




    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
          // just need to add up the digits and beware of the carries and edge cases

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
