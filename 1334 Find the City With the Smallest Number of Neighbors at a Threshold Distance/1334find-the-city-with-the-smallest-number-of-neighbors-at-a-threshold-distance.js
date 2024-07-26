class Pq {
    constructor() {
        this.elements = [];
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    enqueue(priority, value) {
        this.elements.push({ priority, value });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift().value;
    }
}

function dijkstra(n, graph, start) {
    const dist = Array(n).fill(Infinity);
    const pq = new Pq();

    dist[start] = 0;
    pq.enqueue(0, start);

    while (!pq.isEmpty()) {
        const u = pq.dequeue();
        const currentDist = dist[u];

        for (const [v, weight] of graph[u]) {
            if (currentDist + weight < dist[v]) {
                dist[v] = currentDist + weight;
                pq.enqueue(dist[v], v);
            }
        }
    }

    return dist;
}

var findTheCity = function(n, edges, distanceThreshold) {

   const graph = Array.from({ length: n }, () => []);

    for (const [u, v, weight] of edges) {
        graph[u].push([v, weight]);
        graph[v].push([u, weight]);
    }

    const cityCounts = [];

    for (let i = 0; i < n; i++) {
        const dist = dijkstra(n, graph, i);
        const count = dist.filter(d => d <= distanceThreshold).length;
        cityCounts.push([count, i]);
    }

    // Sort primarily by count and secondarily by city index (in reverse)
    cityCounts.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    return cityCounts[0][1];
};