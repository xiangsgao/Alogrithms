package com.gao.leet_code;

import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {

    /**
     *  Merging 2 Packages
        Given a package with a weight limit limit and an array arr of item weights,
        implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit.
        Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j.
        If such a pair doesn’t exist, return an empty array.
        Analyze the time and space complexities of your solution.
        https://leetcode.com/problems/two-sum/
     */


    public static void run(){
        int[] array = new int[] {4, 6, 10, 15, 16};
        int limit = 21;
        System.out.println(Arrays.toString(getIndicesOfItemWeights(array, limit)));
    }


    static int[] getIndicesOfItemWeights(int[] arr, int limit){
        HashMap<Integer, Integer> map = new HashMap<>();
        // use hashmap to cut down the brute force
        for(int i = 0; i < arr.length; i++){
            int complement = limit - arr[i];
            if(map.containsKey(complement)){
                return new int[]{i, map.get(complement)};
            }else{
                map.put(arr[i], i);
            }
        }

        return new int[0];
    }


}
