   
   // failed to solved because i did not realize i can precompute the suffix sum of number of consonants to help handle werid ege cases inwhich volwels surrond the consanants like aaeeihjkioouu
   
    const v = new Set("aeiou".split(""));
    
    function isVowel(ch) {
       return v.has(ch);
    }

   function countOfSubstrings(word, k) {
      const n = word.length;
      const map = new Map();
      let consonantCount = 0;
      let result = 0;

      const nextConsonant = [];
      let lastConsonant = n;

      for(let i =  n - 1; i>= 0; i--){
        nextConsonant[i] = lastConsonant;
        if(!isVowel(word[i])){
            lastConsonant = i;
        }
      }

      let left = 0;
      let right = 0;

      while(right < n){

        // expand the window
        if(isVowel(word[right])){
            map.set(word[right], (map.get(word[right]) ?? 0) + 1);
        }else{
            consonantCount+=1;
        }

        // shrink the window if too many consonants
        while(left <= right && consonantCount > k){
            if(isVowel(word[left])){
                map.set(word[left], map.get(word[left]) - 1);
                if(map.get(word[left]) === 0){
                    map.delete(word[left]);
                }
            }else{
                consonantCount -= 1;
            }
            left++;
        }

         // Count valid substrings
        while (left < right && map.size === 5 && consonantCount == k) {
            result += (nextConsonant[right] - right);
            if (isVowel(word[left])) {
                map.set(word[left], map.get(word[left]) - 1);
                if(map.get(word[left]) === 0){
                    map.delete(word[left]);
                }
            } else {
                consonantCount--;
            }
            left++;
        }

        right++;
      }


        return result;

    }