/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    let graph = Array.from({ length: n + 1 }, () => []);

    for (let [a, b, distance] of roads) {
        graph[a].push([b, distance]);
        graph[b].push([a, distance]);
    }

    let visited = new Set();
    let answer = Infinity;

    function dfs(city) {
        visited.add(city);

        for (let [neighbor, distance] of graph[city]) {
            answer = Math.min(answer, distance);

            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    dfs(1);

    return answer;
};