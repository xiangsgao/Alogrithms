class Solution {
        public String reverseOnlyLetters(String s) {

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
}