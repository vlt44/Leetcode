/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    let rows = grid.length;
    let cols = grid[0].length;
    let dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    health -= grid[0][0];

    if (health <= 0) return false;

    let bestHealth = Array.from({ length: rows }, () =>
        Array(cols).fill(-1)
    );

    bestHealth[0][0] = health;

    let queue = [[0, 0, health]];
    let head = 0;

    while (head < queue.length) {
        let [r, c, currHealth] = queue[head++];

        if (r === rows - 1 && c === cols - 1) {
            return true;
        }

        for (let [dr, dc] of dirs) {
            let nr = r + dr;
            let nc = c + dc;

            if (
                nr < 0 || nr >= rows ||
                nc < 0 || nc >= cols
            ) {
                continue;
            }

            let newHealth = currHealth - grid[nr][nc];

            if (
                newHealth > 0 &&
                newHealth > bestHealth[nr][nc]
            ) {
                bestHealth[nr][nc] = newHealth;
                queue.push([nr, nc, newHealth]);
            }
        }
    }

    return false;
};