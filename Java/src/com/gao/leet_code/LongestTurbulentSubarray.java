package com.gao.leet_code;

import java.util.LinkedList;
import java.util.Objects;
import java.util.PriorityQueue;
import java.util.Queue;

public class LongestTurbulentSubarray {

    public static void run() {
        final int[] input = new int[]{100,100,100};
        System.out.println(maxTurbulenceSize(input));
    }


    public enum Equality {

        GREATER_THAN,
        LESS_THAN,
        EQUAL;

        public static Equality getValue(int firstNum, int secondNum){
            final int difference = firstNum - secondNum;
            if(difference < 0) return  LESS_THAN;
            if(difference > 0) return GREATER_THAN;
            return EQUAL;
        }
    }
    /**
     * Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
     *
     * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
     *
     * More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
     */
    public static int maxTurbulenceSize(int[] arr) {

        if(arr.length == 1) return 1;
        if(arr.length == 0) return 0;

        Queue<Integer> queue = new LinkedList<>();
        for(int element: arr){
            queue.add(element);
        }

        int retVal = 1;
        Equality previousEq = null;
        LinkedList<Integer> window = new LinkedList<>();
        window.add(queue.poll());
        while (true){
            final Integer current = window.getLast();
            final Integer next = queue.peek();
            if(next == null) break;
            Equality currentEq = Equality.getValue(current, next);

            if((currentEq != Equality.EQUAL) && (previousEq == currentEq)){
                retVal = Math.max(window.size(), retVal);
                window.poll();
                if(window.size() >= 2){
                    previousEq = Equality.getValue(window.get(window.size() - 2), window.getLast());
                }else{
                    previousEq = null;
                }
                continue;
            }

            if(currentEq == Equality.EQUAL){
                retVal = Math.max(window.size(), retVal);
                window.clear();
            }

            window.add(next);
            queue.poll();
            previousEq = currentEq;

        }

        retVal = Math.max(window.size(), retVal);
        return  retVal;
    }

}
