/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let dir = [
        [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]
    ];
    let seen = new Set();
    let queue = [[0, 0]];    
    let steps = 0;
    seen.add("0,0");

    while (queue.length) {
        let next = [];
        while (queue.length) {
            let curr = queue.shift();
            let currX = curr[0];
            let currY = curr[1];

            if (currX === x && currY === y) return steps;

            for (let d of dir) {
                let nextX = currX + d[0];
                let nextY = currY + d[1];

                if (!seen.has(nextX + "," + nextY)) {
                    seen.add(nextX + "," + nextY);
                    next.push([nextX, nextY])
                }
            }
        }
        steps++;
        queue = next;
    }
};