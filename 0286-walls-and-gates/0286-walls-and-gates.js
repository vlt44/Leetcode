/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const WALL = -1;
    const GATE = 0;
    const EMPTY = 2147483647;

    let queue = [];
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === GATE) {
                queue.push([i, j]);
            }
        }
    }

    while (queue.length) {
        let curr = queue.shift();
        let currX = curr[0];
        let currY = curr[1];

        for (let d of dir) {
            let nextX = currX + d[0];
            let nextY = currY + d[1];

            if (nextX < 0 || nextX > rooms.length - 1 || nextY < 0 || nextY > rooms[0].length - 1|| rooms[nextX][nextY] !== EMPTY) {
                continue;
            }

            rooms[nextX][nextY] = rooms[currX][currY] + 1;
            queue.push([nextX, nextY]);
        }
    }
};