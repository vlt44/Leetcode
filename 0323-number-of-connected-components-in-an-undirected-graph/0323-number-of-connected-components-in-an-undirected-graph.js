/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let count = 0;
    let graph = {};

    for(let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Set();

    function dfs (node) {
        if (visited.has(node)) return 0;

        visited.add(node);
        for (let n of graph[node]) {
            dfs(n);
        }

        return 1;
    }

    for (let key in graph) {
        key = parseInt(key);
        count += dfs(key);
    }

    return count;
};