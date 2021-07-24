package com.gao.pramp;

public class DeletionDistance {


    public static void run(){
        String str1 = "dog";
        String str2 = "frog";
        System.out.println(deletionDistance(str1, str2));
    }


    /*
        The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

        By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
        We cannot get the same string from both strings by deleting 2 letters or fewer.
        Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.
     */

    // using iterative instead of recursion
    static int deletionDistance(String str1, String str2) {

        int strLen1 = str1.length();
        int strLen2 = str2.length();

        // take care of edge cases, these wont crash since array is strLen + 1 but will compute these cases quicker.
        if(strLen1 == 0 && strLen2 == 0) return 0;
        if(strLen1 == 0) return strLen2;
        if(strLen2 == 0) return strLen1;

        int[][] deletionDistanceArray = new int[strLen1 + 1][strLen2 + 1];

        for(int i = 0; i <= strLen1; i++){
            for(int j = 0; j <= strLen2 ; j++){
                if(i == 0) deletionDistanceArray[i][j] = j;
                else if(j == 0) deletionDistanceArray[i][j] = i;
                else if(str1.charAt(i - 1) == str2.charAt(j - 1)) deletionDistanceArray[i][j] =  deletionDistanceArray[i-1][j-1];
                else deletionDistanceArray[i][j] = 1 + Math.min(deletionDistanceArray[i-1][j], deletionDistanceArray[i][j-1]);
            }
        }
        return deletionDistanceArray[strLen1][strLen2];

    }


}
