package com.gao.leet_code;

import java.util.Stack;

public class ReverseOnlyLetters {

    public static void run(){
        final String input = "Qedo1ct-eeLg=ntse-T!";
        System.out.println(reverseOnlyLetters(input));
    }

    public static String reverseOnlyLetters(String s) {

        if(s.length() == 1) return s;

        final char[] inputChars = s.toCharArray();
        final char[] reverseChars = new char[inputChars.length];

        int tailPtr = inputChars.length - 1;
        int headPtr = 0;

        while(headPtr < reverseChars.length && tailPtr >= 0){
            final char tailChar = inputChars[tailPtr];
            final char headChar = inputChars[headPtr];

            // if not ascii
            if(tailChar < 'A' || tailChar > 'z' || (tailChar > 'Z' && tailChar < 'a')){
                reverseChars[tailPtr] = tailChar;
                tailPtr--;
                continue;
            }

            // if not ascii
            if(headChar < 'A' || headChar > 'z'|| (headChar > 'Z' && headChar < 'a') ){
                reverseChars[headPtr] = headChar;
                headPtr++;
                continue;
            }

            reverseChars[headPtr] = tailChar;
            reverseChars[tailPtr] = headChar;
            tailPtr--;
            headPtr++;
        }

        return new String(reverseChars);
    }

    // much better
    public static String solution_two(String S) {
        Stack<Character> letters = new Stack();
        for (char c: S.toCharArray())
            if (Character.isLetter(c))
                letters.push(c);

        StringBuilder ans = new StringBuilder();
        for (char c: S.toCharArray()) {
            if (Character.isLetter(c))
                ans.append(letters.pop());
            else
                ans.append(c);
        }

        return ans.toString();
    }





}
