class Solution {
    
    public int maxNumberOfBalloons(String text) {
        final HashMap<Character, Integer> map = new HashMap<>();
        final HashMap<Character, Integer> neededCharMap = new HashMap<>();
        final char[] charArray = text.toLowerCase().toCharArray();

        for(char c : charArray){
            if(map.containsKey(c)){
                map.put(c, map.get(c) + 1);
            }else {
                map.put(c, 1);
            }

        }

        neededCharMap.put('b', 1);
        neededCharMap.put('a', 1);
        neededCharMap.put('l', 2);
        neededCharMap.put('o', 2);
        neededCharMap.put('n', 1);

        int retVal = 0;
        int characters = text.length();
        int numCharsNeeded = "balloon".length();
        while(characters >= numCharsNeeded){
            // make sure it contains the needed number of char first
            if(!containsNeededChar(map, neededCharMap)) break;
            retVal++;
        }
        return retVal;
        
    }
    
        public boolean containsNeededChar(HashMap<Character, Integer> map, HashMap<Character, Integer> neededMap){
        char[] neededChar = new char[]{'b', 'a', 'l', 'o', 'n'};
        for(char c : neededChar){
            if(!map.containsKey(c)) return false;
            if(map.get(c) < neededMap.get(c)) return false;
            map.put(c, map.get(c) - neededMap.get(c)); // decrement the count in the map
        }
        return true;
    }
}