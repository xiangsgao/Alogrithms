/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    
    const getCount = (str) =>{
        let count = 0;
        for(let i = 0; i + str.length <= s.length; i++){
            const sub = s.substring(i, i + str.length);
            if(sub === str){
                count++;
            }

            if(count === 3){
                return true;
            }
        }

        return false;
    }

    let str = "";
    let max = -1;
    for(let right = 0; right < s.length; right++){
        const c = s[right];
        if(str.length && str[0] !== c){
            while(str.length){
                const isSpecial = getCount(str);
                if(isSpecial){
                    max = Math.max(str.length, max);
                    break;
                }
                str = str.substring(1, str.length);
            }
            str = "";
        }
        str += c;
    }

     while(str.length){
        const isSpecial = getCount(str);
        if(isSpecial){
            max = Math.max(str.length, max);
            break;
        }
        str = str.substring(1, str.length);
    }
    return max;
};