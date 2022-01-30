class Solution {
    public boolean isValid(String s) {
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