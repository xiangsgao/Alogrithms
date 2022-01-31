package com.gao.leet_code;

import java.util.PriorityQueue;
import java.util.Queue;

public class MergeTwoSortedLists {


    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }

        @Override
        public String toString() {
            ListNode current = this;
            String retVal = "";
            do {
                retVal += current.val;
                current = current.next;
            }while (current != null);
            return retVal;
        }
    }



    public static void run(){
        int[] firstNode = new int[]{1, 2, 4};
        int[] secondNode = new int[]{1, 3, 4};
        final ListNode nodeOne = buildNode(firstNode, null, null);
        final ListNode nodeTwo = buildNode(secondNode, null, null);
        System.out.println(mergeTwoLists(nodeOne, nodeTwo).toString());
    }

    private static ListNode buildNode(int[] nodeArray, ListNode current, ListNode head) {
        for(int x : nodeArray){
            if(head == null) {
                head = new ListNode(x);
                head.val = x;
                current = head;
            }
            else{
                ListNode nextNode = new ListNode(x);
                nextNode.val = x;
                current.next = nextNode;
                current = nextNode;
            }
        }
        return head;
    }

    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        Queue<Integer> priorityQueue = new PriorityQueue();
        ListNode currentL1 = list1;
        ListNode currentL2 = list2;
        do{
            if(currentL1 != null){
                priorityQueue.offer(currentL1.val);
                currentL1 = currentL1.next;
            }

            if(currentL2 != null){
                priorityQueue.offer(currentL2.val);
                currentL2 = currentL2.next;
            }

        }while (currentL1 != null || currentL2 != null);

        // edge cases
        if(priorityQueue.size() == 0) return null;

        final ListNode retVal = new ListNode();
        ListNode current = retVal;
        for(Integer x = priorityQueue.poll(); x != null; x = priorityQueue.poll()){
            current.val = x;
            if(priorityQueue.peek() != null){
                ListNode nextNode = new ListNode();
                current.next = nextNode;
                current = nextNode;
            }
        }
        return retVal;
    }

}
