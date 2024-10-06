/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    const str = sentence1.length > sentence2.length ? sentence2 : sentence1;
    const str2 = sentence1.length > sentence2.length ? sentence1: sentence2;
    const words = str.split(" ");
    const words2 = str2.split(" ");

   let left = 0;
   let left2 = 0;
   while(left < words.length && left2 < words2.length && words[left] === words2[left2]){
    left++;
    left2++;
   }

    let right = words.length - 1;
    let right2 = words2.length - 1;
    while(right >= 0 && right2 >= 0 && words[right] === words2[right2]){
        right--;
        right2--;
    } 
    
    return left > right;
};