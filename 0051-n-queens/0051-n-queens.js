/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n.length === 1) return [["Q"]];

    let col = new Set();
    let posDiag = new Set();
    let negDiag = new Set();

    let res = [];
    let board = Array.from(Array(n), () => new Array(n).fill("."));

    const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c));

    const addQueen = (r, c) => {
        col.add(c);
        posDiag.add(r + c);
        negDiag.add(r - c);
        board[r][c] = "Q";
    }

    const removeQueen = (r, c) => {
        col.delete(c);
        posDiag.delete(r + c);
        negDiag.delete(r - c);
        board[r][c] = ".";
    }

    function recurse(row) {
        if(row === n) {
            res.push([...board].map((row) => row.join("")));
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                addQueen(row, col);
                recurse(row + 1);
                removeQueen(row, col);
            }
        }
    }

    recurse(0);
    return res;

};