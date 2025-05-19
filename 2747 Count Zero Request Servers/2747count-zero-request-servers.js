/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
 // failed to solve because not counting the noRequests properly
 // the trick is to update servers that have no requests as you increment the right side of the interval and shrinking the left side of the interval.
var countServers = function(n, logs, x, queries) {
    logs = logs.sort((a,b) => a[1] - b[1]);

    queries = queries.map((e, i) => [e, i]).sort((a,b) => a[0] - b[0]);

    const map = new Map();
    
    let left = 0;
    let right = 0;
    const res = Array(queries.length).fill(0);
    let noRequests = n;
    for(let i = 0; i < queries.length; i++){
        const [max, idx] = queries[i];

        const min = max - x;
        
        // all the servers that are valid in the windows, incrementing right
        while(right < logs.length && logs[right][1] <= max){
            if((map.get(logs[right][0]) ?? 0) === 0){
                noRequests -= 1;
            }
            map.set(logs[right][0], (map.get(logs[right][0]) ?? 0) + 1);
            right++;
        }

        // all the ones that are not valid in this window, incrementing left
        while(left < logs.length && logs[left][1] < min){
            if(map.get(logs[left][0]) === 1){
                noRequests += 1;
            }
            map.set(logs[left][0], map.get(logs[left][0]) - 1);
            left++;
        }

        res[idx] = noRequests;
    }

    return res;

};