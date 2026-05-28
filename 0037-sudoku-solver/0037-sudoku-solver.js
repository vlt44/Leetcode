/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const EMPTY = ".";
const NUMSET = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var solveSudoku = function(board) {
    let emptySpace = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === EMPTY) {
                emptySpace.push({row: i, col: j})
            }
        }
    }

    function recurse(emptySpaceIndex) {
        if (emptySpaceIndex >= emptySpace.length) {
            return true;
        }
        const {row, col} = emptySpace[emptySpaceIndex];

        for (let i = 0; i < NUMSET.length; i++) {
            let num = NUMSET[i];
            if (isValid(num, row, col, board)) {
                board[row][col] = num;
                if (recurse(emptySpaceIndex + 1)) {
                    return true;
                }

                board[row][col] = EMPTY;
            }
        }

        return false;
    }
    recurse(0);
    return board;
};

function isValid(number, row, col, board) {
    for (let i = 0; i < board.length; i++) {
        if (board[row][i] === number || board[i][col] === number) {
            return false;
        }

        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === number) {
                    return false;
                }
            }
        }
    }

    return true;
}