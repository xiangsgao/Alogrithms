package com.gao;

import com.gao.basic_alogrithms.SortedArray;
import com.gao.leet_code.AddTwoNumbers;
import com.gao.leet_code.LongestSubstringWithoutRepeatingCharacters;
import com.gao.leet_code.TwoSum;
import com.gao.pramp.DeletionDistance;
import com.gao.pramp.SmallestSubstring;
import com.gao.pramp.TimePlanner;

public class Main {

    public static void main(String[] args) {
        for(String element: args){
            System.out.println(element);
        }
        System.out.println("SortedArray:");
        SortedArray.run();
        System.out.println("SmallestSubstring:");
        SmallestSubstring.run();
        System.out.println("TimePlanner:");
        TimePlanner.run();
        System.out.println("TwoSum:");
        TwoSum.run();
        System.out.println("DeletionDistance:");
        DeletionDistance.run();
        System.out.println("AddTwoNumbers:");
        AddTwoNumbers.run();
        System.out.println("LongestSubstringWithoutRepeatingCharacters:");
        LongestSubstringWithoutRepeatingCharacters.run();
    }
}
