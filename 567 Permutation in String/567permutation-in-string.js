/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
        if(s1.length === 0){
            return true;
        }

        if(s1.length > s2.length){
            return false;
        }

        let matches = 0;
        const s1Count = {};
        const s2Count = {};

        for(let i = 0; i < s1.length; i++){
            s1Count[s1[i]] = (s1Count[s1[i]] ?? 0) + 1;
            s2Count[s2[i]] = (s2Count[s2[i]] ?? 0) + 1;
        }

        for(const c of new Set(s1.split("").values())){
            if(s1Count[c] === s2Count[c]){
                matches+=1;
            }
        }
       
        let left = 0;
        let right = s1.length;
        const charSet = Object.keys(s1Count).length;
        while(right < s2.length){
            
            if(matches === charSet){
                return true;
            }

            let c = s2[right];

            s2Count[c] = (s2Count[c] ?? 0) + 1;
            if(s2Count[c] === s1Count[c]){
                matches += 1;
            }else if(s1Count[c] + 1 === s2Count[c]){
                matches -= 1;
            }
           
            c = s2[left];
            s2Count[c] = (s2Count[c] ?? 0) - 1;
            if(s2Count[c] === s1Count[c]){
                matches += 1;
            }else if(s1Count[c] - 1 === s2Count[c]){
                matches -= 1;
            }

           left += 1;
           right += 1;
        }

       
        return matches === charSet;

};
