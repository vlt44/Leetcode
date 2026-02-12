/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroPos = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroPos.push([i,j]);
            }
        }
    }

    for (let i = 0; i < zeroPos.length; i++) {
        const [row, col] = zeroPos[i];

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }

        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }
    }
};