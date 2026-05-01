/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    let visited = new Set();

    for (let [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }

        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }

    function dfs(vertex) {
        visited.add(vertex);

        let neigh = graph.get(vertex);

        if (neigh && neigh.length > 0) {
            for (let i = 0; i < neigh.length; i++) {
                if (!visited.has(neigh[i])) {
                    dfs(neigh[i]);
                }
            }
        }
    }

    dfs(source);
    return visited.has(destination);
};