/**
 * @param {string[]} transactions
 * @return {string[]}
 */

 // > 1000 is invalid
 // same name, different city, <= 60 min
 // name, time, amount, city
var invalidTransactions = function(transactions) {
    
    const objs = transactions.map((e) => {
        const [name, time, amount, city] = e.split(",");
        return {
            name,
            time: Number(time),
            amount: Number(amount),
            city
        };
    });

    const res = [];
    const sorted = objs.sort((a, b) =>{
        if(a.amount > 1000 && !a.added){
            a.added = true;
            res.push(
                `${a.name},${a.time},${a.amount},${a.city}`
            );
        }

        if(b.amount > 1000 && !b.added){
            b.added = true;
            res.push(
                `${b.name},${b.time},${b.amount},${b.city}`
            );
        }
        
        return a.time - b.time;
    });

   

    const map = new Map();
    for(let i = 0; i < sorted.length; i++){
        const cur = sorted[i];
        const previous = map.get(cur.name) ?? [];
        
        for(let j = previous.length - 1; j>=0; j--){
            const preE = previous[j];
            if(Math.abs(preE.time - cur.time) > 60){
                break;
            }

            if(preE.city === cur.city){
                continue;
            }



            if(!preE.added){
                res.push(`${preE.name},${preE.time},${preE.amount},${preE.city}`);
                preE.added = true;
            }

            if(!cur.added){
                res.push(`${cur.name},${cur.time},${cur.amount},${cur.city}`);
                cur.added = true;
            }
        }

        previous.push(cur);
        map.set(cur.name, previous);
    }

    return res;

};