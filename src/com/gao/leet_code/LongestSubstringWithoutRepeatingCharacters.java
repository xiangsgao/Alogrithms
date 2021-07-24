package com.gao.leet_code;
import java.util.ArrayList;
import java.util.List;

public class LongestSubstringWithoutRepeatingCharacters {

    public static void run(){
        String s = "au";
        int result = lengthOfLongestSubstring(s);
        System.out.println(result);
    }

    /**
     * Given a string s, find the length of the longest substring without repeating characters.
     */

    public static int lengthOfLongestSubstring(String s) {
        char[] charArray = s.toCharArray();
        // edge cases
        if(charArray.length == 0) return 0;
        if(charArray.length == 1) return 1;
        if(charArray.length == 2) return (charArray[0] == charArray[1]) ? 1 : 2;

        // need to use the sliding windows technique
        int longest = 1;
        int currentLongest = longest;
        List<Character> array = new ArrayList<>();
        array.add(charArray[0]);
        int leftWindow = 0;
        int i = leftWindow + 1;
        while(i < charArray.length){
            char current = charArray[i];
            if(array.contains(current)){
                longest = currentLongest > longest ? currentLongest : longest;
                currentLongest = 1;
                array.clear();
                array.add(charArray[++leftWindow]);
                i = leftWindow + 1;
            }else{
                currentLongest += 1;
                array.add(current);
                i++;
            }
        }

        // gotta do one last check since this can be the case at the end
        longest = currentLongest > longest ? currentLongest : longest;
        return longest;
    }

}
