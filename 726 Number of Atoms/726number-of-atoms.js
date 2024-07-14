/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {

    const stack = [];
    const nums = "0123456789";

    let i = 0
    for(; i < formula.length;){
        const c = formula[i];
        if(nums.includes(c)){
            const last = stack.pop();
            let num = Number(c);
            if(last === ")"){
                while(nums.includes(formula[++i])){
                    num = Number(`${num}${formula[i]}`)
                }
                i--;
                const temp = [];
                while(stack[stack.length - 1] !== "("){
                    const e = stack.pop();
                    e.count = (e.count ?? 1) * num;
                    temp.push(e);
                }
                stack.pop();
                while(temp.length){
                    stack.push(temp.pop());
                }
            }else{
                last.count = last.count === undefined ? num : Number(`${last.count}${num}`)
                stack.push(last);
            }
        }else if(c === "(" || c === ")"){
            stack.push(c); 
        }else if(c === c.toLowerCase()){
            let last = stack.pop();
            last.atom += c;
            stack.push(last);
        }else{
            stack.push({atom: c});
        }
        i++;
    }
    
    const map = new Map();
  
    while(stack.length){
        const e = stack.pop();
        if(e === "(" || e === ")"){
            continue;
        }
        map.set(e.atom, (map.get(e.atom) ?? 0) + (e.count ?? 1));
    }

    let retval = [...map.keys()].sort((a, b) =>{
         return a < b ? -1 : 1
    });
    retval = retval.map(e => `${e}${map.get(e) === 1 ? "" : map.get(e)}`).join("");

    return retval;

};