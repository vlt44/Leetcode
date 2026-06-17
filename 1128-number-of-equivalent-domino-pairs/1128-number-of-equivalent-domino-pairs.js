/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let output = 0;
    let map = {};

    for (let i =0; i < dominoes.length; i++) {
        let low = Math.min(dominoes[i][0], dominoes[i][1]);
        let high = Math.max(dominoes[i][0], dominoes[i][1]);
        let code = high * 10 + low;

        if (map[code] === undefined) {
            map[code] = 0;
        } else {
            map[code]++;
            output += map[code];
        }
    }
    
    return output;
};