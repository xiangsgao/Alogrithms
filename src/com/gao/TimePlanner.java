package com.gao;

import java.util.Arrays;

/**
 * Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur,
 * returns the earliest time slot that works for both of them and is of duration dur.
 * If there is no common time slot that satisfies the duration requirement, return an empty array.
 *
 * Time is given in a Unix format called Epoch,
 * which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.
 *
 * Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two.
 * The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot.
 * The input variable dur is a positive integer that represents the duration of a meeting in seconds.
 * The output is also a pair represented by an epoch array of size two.
 *
 * In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.
 *
 * Implement an efficient solution and analyze its time and space complexities.
 */


public class TimePlanner {

    // O(M + N)
    public static void run(){
       int[][] slotsA = {{10, 50}, {60, 120}, {140, 210}};
       int[][] slotB = {{0, 15}, {60, 70}};
       int dur = 8;
       System.out.println(Arrays.toString(meetingPlanner(slotsA, slotB, dur)));
    }

    static int[] meetingPlanner(int[][] slotsA, int[][] slotsB, int dur) {

        int indexA = 0;
        int indexB = 0;

        while(indexA < slotsA.length && indexB < slotsB.length){
            int start = Math.max(slotsA[indexA][0], slotsB[indexB][0]);
            int end = Math.min(slotsA[indexA][1], slotsB[indexB][1]);

            if(start + dur <= end){
                return new int[]{start, start + dur};
            }else{
                if(slotsA[indexA][1] < slotsB[indexB][1]){
                    indexA++;
                }else{
                    indexB++;
                }
            }
        }

        return new int[0];
    }

}
