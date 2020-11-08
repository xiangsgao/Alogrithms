package com.gao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class SmallestSubstring {


    public static void run(){
       char[] arr = {'x','y','z'}; String str = "xyyzyzyxz";
       System.out.println(getShortestUniqueSubstring(arr, str));

    }



    /**
     * Given an array of unique characters arr and a string str,
     * Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr.
     * Return "" (empty string) if such a substring doesn’t exist.
     * Come up with an asymptotically optimal solution and analyze the time and space complexities.
     * O(m+n)
     */

    static String getShortestUniqueSubstring(char[] arr, String str) {

        // pretty much use hash map to keep count of each characters in arr in the current substring. if current char count is 0 then increment unqiue. once unique reaches the length of arr, check length vs current result
        // remove count of first char in sub array, remove unique if it is the only matching unique char in arr. start a new sub string from the first char
       int headIndex = 0;
       String result = "";
       int uniqueCounter = 0;
       HashMap<Character, Integer> countMap = new HashMap<Character, Integer>();
       for(char c : arr){
           countMap.put(c, 0);
       }

       for(int tailIndex = 0; tailIndex <= str.length() - 1; tailIndex++){
           char tailChar = str.charAt(tailIndex);

           if(!countMap.containsKey(tailChar))
               continue;

           int tailCount = countMap.get(tailChar);
           if(tailCount == 0){
               uniqueCounter += 1;
           }

           countMap.put(tailChar, tailCount + 1);

           while(uniqueCounter == arr.length){
                int temLength = tailIndex - headIndex + 1;
                if(temLength == arr.length){
                    if(tailIndex == str.length() - 1){
                        return str.substring(headIndex);
                    }
                    return  str.substring(headIndex, tailIndex + 1);
                }

                if(result == "" || temLength < result.length()){
                    result = str.substring(headIndex, tailIndex + 1);
                }

                char headChar = str.charAt(headIndex);
                if(countMap.containsKey(headChar)){
                    int headCount = countMap.get(headChar) - 1;
                    if(headCount == 0){
                        uniqueCounter = uniqueCounter - 1;
                    }
                    countMap.put(headChar, headCount);
                }
                headIndex += 1;
           }

       }
       return result;
    }
}
