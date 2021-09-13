package com.gao.leet_code;

import java.util.ArrayList;
import java.util.List;

public class MedianOfTwoSortedArrays {

    public static void run(){
        int[] nums1 = new int[]{2};
        int[] nums2 = new int[]{};
        System.out.println(findMedianSortedArrays(nums1, nums2));
    }

    /**
     * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
     *
     * The overall run time complexity should be O(log (m+n)).
     *
     *  https://leetcode.com/problems/median-of-two-sorted-arrays/
     *
     *  not the correct solution, most optimal is binary search
     *  https://www.youtube.com/watch?v=lLFDQCDzfpI
     */
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // using merge sort to merge the two sorted array
        int[] result = merge(nums1, nums2);

        // handle edge cases
        if (result.length == 0) return 0;
        if(result.length == 1) return result[0];

        // if odd number in the list
        if(result.length % 2 == 1){
            int medianIndex = result.length / 2;
            return result[medianIndex];
        }else{
            int medianRightIndex = result.length / 2;
            int medianLeftIndex = medianRightIndex - 1;
            int leftMedian = result[medianLeftIndex];
            int rightMedian = result[medianRightIndex];
            return ((double) leftMedian + (double) rightMedian) / 2;
        }
    }

    // helper for merge
    public static int[] merge(int[] a, int[] b){
        List<Integer> c = new ArrayList<>();

        int aIndex = 0;
        int bIndex = 0;
        while(aIndex < a.length && bIndex < b.length ){
            int aElement = a[aIndex];
            int bElement = b[bIndex];
            if(aElement < bElement){
                c.add(aElement);
                aIndex++;
            }else{
                c.add(bElement);
                bIndex++;
            }
        }

        while(aIndex < a.length){
            c.add(a[aIndex++]);
        }

        while(bIndex < b.length){
            c.add(b[bIndex++]);
        }

        return c.stream().mapToInt(i->i).toArray();
    }

}
