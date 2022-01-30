package com.gao.leet_code;

import java.util.Map;
import java.util.Stack;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ValidParentheses {

    public static void run(){
        final String s = "()[]{}";
        System.out.println(solution(s));
    }


    /***
     * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
     *
     * An input string is valid if:
     *
     * Open brackets must be closed by the same type of brackets.
     * Open brackets must be closed in the correct order.
     * @param s
     */
    public static boolean solution(String s){
        Map<Character, Character> hashmap = Stream.of(new char[][]{
                {')', '('},
                {'}', '{'},
                {']', '['}
        }).collect(Collectors.toMap(pair -> pair[0], pair -> pair[1]));

        Stack<Character> stack = new Stack();

        for(char c : s.toCharArray()){
            if(hashmap.containsKey(c)){
                if(!stack.empty() && hashmap.get(c) == stack.peek())
                    stack.pop();
                else
                    return false;
            }
            else stack.push(c);
        }
        return stack.empty();
    }

}
