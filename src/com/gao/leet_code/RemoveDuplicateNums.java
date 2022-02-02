package com.gao.leet_code;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

public class RemoveDuplicateNums {

    public static void run(){
        int[] input = {1,2,2};
        System.out.println(solution(input));
        System.out.println(Arrays.toString(input));
    }

    public static int solution(int[] nums){

        int pointerA = 1;
        int pointerB = 1;
        while (pointerB < nums.length){
            int current = nums[pointerB];
            int pre = nums[pointerB - 1];
            if(pre == current){
                pointerB++;
            }else{
                nums[pointerA] = current;
                pointerA++;
                pointerB++;
            }
        }
        return pointerA;
    }
}
