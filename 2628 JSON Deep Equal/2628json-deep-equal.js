/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {

    const recursive = (one, two) =>{
      
        if(one === null || two === null){
            return one === two;
        }

        if(typeof one !== typeof two){
            return false;
        }

        if(typeof one !== "object"){
            return one === two;
        }

        if(Array.isArray(one) || Array.isArray(two)){
            if(String(one) !== String(two)){
                return false;
            }

            for(let i = 0; i < one.length; i++){
                const equal = recursive(one[i], two[i]);
                if(!equal){
                    return false;
                }
            }
        }else{
          
            if(Object.keys(one).length !== Object.keys(two).length){
                return false;
            }
            for(const key in one){
                const equal = recursive(one[key], two[key]);
                if(!equal){
                    return false;
                }
            }
        }
        return true;
    }  

    return recursive(o1, o2);
};