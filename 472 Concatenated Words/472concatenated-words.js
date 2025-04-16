/**
 * @param {string[]} words
 * @return {string[]}
 */
 // failed to solve because my thought process is shit. we just need to put words into a sect and break each word into different prefix and suffixes and see if the set contains at least to of these prefix/suffix. slap on a cache and solved. also doesnt help when i misread the question
var findAllConcatenatedWordsInADict = function(words) {
    
   const set = new Set(words);

   const cache = new Map();

   const dfs = (word) =>{

    if(cache.has(word)){
        return cache.get(word);
    }

     for(let i = 1; i < word.length; i++){
        const prefix = word.substring(0, i);
        const suffix = word.substring(i, word.length);
        if((set.has(prefix) && set.has(suffix)) || (
            set.has(prefix) && dfs(suffix)
        )){
            cache.set(word, true);
            return true;
        }
     }
     cache.set(word, false);
     return false;
   }

   const res = [];
   for(const w of words){
        if(dfs(w)){
            res.push(w);
        }
   }
   
   return res;
};