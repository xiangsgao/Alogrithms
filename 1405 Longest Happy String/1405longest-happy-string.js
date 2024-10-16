/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
   const chars = [["a", a], ["b", b], ["c", c]];
   const heap = new PriorityQueue({
    compare: ([_, a], [__, b]) => b - a
   });

    for(const e of chars){
        if(e[1] === 0){
            continue;
        }
        heap.enqueue(e);
    }

   let s = "";
   while(heap.size()){
     let [char, count] = heap.dequeue();
      
     if(s[s.length - 1] === char && s[s.length -2] === char){
        if(heap.size() === 0){
            return s;
        }
        let [char2, count2] = heap.dequeue();
        s += char2;
        count2 -= 1;
        if(count2){
            heap.enqueue([char2, count2]);
        }
     }else{
        s += char;
        count -= 1;
     }
    
     if(count){
        heap.enqueue([char, count]);
     }
   }
   return s;
};