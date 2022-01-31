class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;
        String intString = String.valueOf(x);
        String reverse = new StringBuilder(intString).reverse().toString();
        return reverse.equals(intString);
        
    }
}