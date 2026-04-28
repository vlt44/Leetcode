/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];

    function backtrack(currNode, currArr) {
        currArr.push(currNode);

        if (currNode === graph.length - 1) {
            res.push([...currArr]);
        }

        let nb = graph[currNode];

        for (let n of nb) {
            backtrack(n, currArr)
        }

        currArr.pop();
    }

    backtrack(0, []);
    return res;
};