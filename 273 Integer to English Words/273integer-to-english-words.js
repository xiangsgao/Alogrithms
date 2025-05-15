/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    num = num.toString();

    if(num === "0"){
        return "Zero";
    }

    const ones = new Map();
    ones.set("0", "")
    ones.set("1", "One");
    ones.set("2", "Two");
    ones.set("3", "Three");
    ones.set("4", "Four");
    ones.set("5", "Five");
    ones.set("6", "Six");
    ones.set("7", "Seven");
    ones.set("8", "Eight");
    ones.set("9", "Nine");

    const twos = new Map(); 
    twos.set("10", "Ten");
    twos.set("11", "Eleven");
    twos.set("12", "Twelve");
    twos.set("13", "Thirteen");
    twos.set("14", "Fourteen");
    twos.set("15", "Fifteen");
    twos.set("16", "Sixteen");
    twos.set("17", "Seventeen");
    twos.set("18", "Eighteen");
    twos.set("19", "Nineteen");

    const ties = new Map();
    ties.set("2", "Twenty");
    ties.set("3", "Thirty");
    ties.set("4", "Forty");
    ties.set("5", "Fifty");
    ties.set("6", "Sixty");
    ties.set("7", "Seventy");
    ties.set("8", "Eighty");
    ties.set("9", "Ninety");

    if(ones.has(num)){
        return ones.get(num);
    }

    if(twos.has(num)){
        return twos.get(num);
    }

    // turn the three digits into words
    const helper = (threeDigits) =>{


        const z = 3 - threeDigits.length;
        threeDigits = "0".repeat(z) + threeDigits;
        
        const res = [];

        if(threeDigits[0] !== "0"){
             res.push(ones.get(threeDigits[0]));
             res.push("Hundred");
        }

        if(threeDigits[1] === "1"){
            res.push(
                twos.get(threeDigits.slice(1, threeDigits.length))
            );
        }else if(threeDigits[1] === "0"){
             res.push(
                ones.get(threeDigits[2])
            );
        }else{
            res.push(
                [ties.get(threeDigits[1]), ones.get(threeDigits[2])].join(" ").trim()
            );
        }

        
        return res.join(" ").trim();
    }

    num = num.split("");
    let hundreds = [num.pop() , num.pop() , num.pop()].reverse().filter(e => e !== undefined).join("");
    let thousands = [num.pop() , num.pop() , num.pop()].reverse().filter(e => e !== undefined).join("");
    let millions = [num.pop() , num.pop() , num.pop()].reverse().filter(e => e !== undefined).join("")
    let billions = num.pop() ?? "";


    hundreds = helper(hundreds);
    thousands = helper(thousands);
    millions = helper(millions);


    const res = [];

    if(billions){
        res.push(ones.get(billions));
        res.push("Billion");
    }

    if(millions){
        res.push(millions);
        res.push("Million");
    }

    if(thousands){
        res.push(thousands);
        res.push("Thousand");
    }

    res.push(hundreds);

    return res.join(" ").trim();
    
};