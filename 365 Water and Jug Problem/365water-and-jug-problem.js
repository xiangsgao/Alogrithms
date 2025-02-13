/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    

    const visited = new Map();
    const cycle = new Set();
    const bruteForce = (a = 0, b = 0) =>{
        const key = `${a},${b}`;

       
        if(a + b === target){
            return true;
        }



        if(visited.has(key)){
            return visited.get(key);
        }



        if(cycle.has(key)){
            return false;
        }


        cycle.add(key);

        

        // empty a
        if(a){

           const valid = bruteForce(0, b);
           if(valid){
            visited.set(key, valid);
            return valid;
           }
        }
        // empty b
        if(b){
           const valid = bruteForce(a, 0);
           if(valid){
            visited.set(key, valid);
            return valid;
           }
        }

           
        // fill a
        if(a !== x){
           const valid = bruteForce(x, b);
           if(valid){
            visited.set(key, valid);
            return valid;
           }
        }

        // fill b
        if(b !== y){

           const valid = bruteForce(a, y);
           if(valid){
            visited.set(key, valid);
            return valid;
           }
        }


        // pour a into b
        if(a && (b !== y)){
           const newB = Math.min(y, a + b);
           const newA = a - (newB - b)
           const valid = bruteForce(newA, newB);
           if(valid){
            visited.set(key, valid);
            return valid;
           }
        }

        // pour b into a 
        if(b && (a !== x)){

           const newA = Math.min(x, a + b);
           const newB = b - (newA - a)

           const valid = bruteForce(newA, newB);
           if(valid){
            visited.set(key, valid);
            return valid;
           }
        }

        cycle.delete(key);
        visited.set(key, false);
        
        return false;
    }


    return bruteForce();

};