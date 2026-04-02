/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let adjList = {};

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    for (let [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    let visited = new Set();

    function checkCycle(current, parent) {
        visited.add(current);
        let neighbors = adjList[current];

        if (neighbors.length) {
            for (let neigh of neighbors) {
                if (visited.has(neigh)) {
                    if (neigh !== parent) {
                        return true;
                    }
                } else {
                    if (checkCycle(neigh, current)) {
                        return true;
                    } 
                }
            }
        }
        return false;
    }

    if (checkCycle(0, -1)) return false;

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            return false;
        }
    }
    return true;
};