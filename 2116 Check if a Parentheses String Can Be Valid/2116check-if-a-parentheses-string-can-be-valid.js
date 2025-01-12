/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
   const stack = [];
   const stack2 = [];
    
   for(let i = 0 ; i < s.length; i++){
        const cur = s[i];

        if(locked[i] === "0"){
            stack.push(i);
        }else if(cur === "("){
            stack2.push(i);
        }else if(stack2.length){
            stack2.pop();
        }else if(stack.length){
            stack.pop();
        }else{
            return false;
        }
   }

   let stackSet = new Set(stack);
   
   while(stack2.length){
        const i = stack2.pop();
        let canBeRemoved = false;
        for(const j of stackSet.values()){
            if(j > i){
                stackSet.delete(j);
                canBeRemoved = true;
                break;
            }
        }
        if(!canBeRemoved){
            return false;
        }
   }

    return stackSet.size % 2 !== 1;

};