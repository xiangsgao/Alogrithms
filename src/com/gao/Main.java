package com.gao;


import java.util.*;

public class Main {

    public static void main(String[] args) {
        for(String element: args){
            System.out.println(element);
        }
        HashSet<Character> map = new HashSet<>();
        Queue<Integer> q = new LinkedList<>();
        SortedArray.run();
        SmallestSubstring.run();
        TimePlanner.run();
        SumOfTwo.run();
        DynamicProgramming.run();
    }





}
