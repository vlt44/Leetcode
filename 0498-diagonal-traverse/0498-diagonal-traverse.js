/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (mat.length === 1) return mat.flat();

    let row = mat.length;
    let col = mat[0].length;

    let res = Array.from(Array(row + col - 1), () => Array().fill([]));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if ((i + j) % 2 === 0) {
                res[i + j].unshift(mat[i][j]);
            } else {
                res[i + j].push(mat[i][j]);
            }
        }
    }

    return res.flat();
};