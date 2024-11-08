/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
const flightMap = new Map();
    const result = [];

    // Populate the flight map with each departure and arrival
    for (const [departure, arrival] of tickets) {
        if (!flightMap.has(departure)) {
            flightMap.set(departure, []);
        }
        flightMap.get(departure).push(arrival);
    }

    // Sort each list of destinations in reverse lexicographical order
    for (const [departure, destinations] of flightMap) {
        destinations.sort().reverse();
    }

    function dfsTraversal(current) {
        const destinations = flightMap.get(current);

        // Traverse all destinations in the order of their lexicographical 
        // sorting
        while (destinations && destinations.length) {
            // Pop the last destination from the list (smallest lexicographical 
            // order due to reverse sorting)
            const nextDestination = destinations.pop();

            // Recursively perform DFS on the next destination
            dfsTraversal(nextDestination);
        }

        // Append the current airport to the result after all destinations are 
        // visited
        result.push(current);
    }

    dfsTraversal('JFK');

    return result.reverse();
};