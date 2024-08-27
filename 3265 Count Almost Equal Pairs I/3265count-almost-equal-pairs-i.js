/**
 * @param {number[]} nums
 * @return {number}
 */


const almostEqual = (num1, num2) =>{
            if(num1 === num2){
                return true;
            }
            let first = num1.toString().split("");
            let second = num2.toString().split("");

            while(first.length < second.length){
                first.unshift("0");
            }

            while(second.length < first.length){
                second.unshift("0");
            }
            // brute force to see if almost equal
            let longerString = [...first];
            for(let i = 0; i < longerString.length - 1; i++){
                const firstChar = longerString[i];
                for(let j = i + 1; j < longerString.length;j++){
                    const secondChar = longerString[j];
                    longerString[i] = secondChar;
                    longerString[j] = firstChar;
                    if(Number(longerString.join("")) === Number(second.join(""))){
                        return true;
                    }else{
                        longerString = [...first];
                    }
                }
            }

            return false;

}

var countPairs = function(nums) {
    let retval = 0;
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(almostEqual(nums[i], nums[j])){
                retval++;
            }
        }
    }

    return retval

};