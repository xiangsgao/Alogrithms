import java.util.Map;

import static java.util.Map.entry;

class Solution {

  final Map<String, Integer> symbolsMap = Map.ofEntries(
            entry("I", 1),
            entry("V", 5),
            entry("X", 10),
            entry("L", 50),
            entry("C", 100),
            entry("D", 500),
            entry("M", 1000)
    );

    final Map<String, Integer> specialCaseMap = Map.ofEntries(
            entry("IV", 4),
            entry("IX", 9),
            entry("XL", 40),
            entry("XC", 90),
            entry("CD", 400),
            entry("CM", 900)
    );

 public int romanToInt(String s) {

        int retval = 0;
        for (int i = 0; i < s.length(); ) {
            if (i + 1 < s.length() && specialCaseMap.containsKey(s.substring(i, i + 2))) {
                retval += specialCaseMap.get(s.substring(i, i + 2));
                i += 2;
            } else {
                retval += symbolsMap.get(String.valueOf(s.charAt(i++)));
            }
        }


        return retval;
    }
}