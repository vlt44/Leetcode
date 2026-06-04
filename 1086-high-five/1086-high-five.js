/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let scoreMap = {};

    for (let [id, score] of items) {
        if (!scoreMap[id]) { 
            scoreMap[id] = [score];
        } else {
            scoreMap[id].push(score);
        }
    }

    let res = [];

    Object.keys(scoreMap).map((key) => {
        let values = scoreMap[key];

        values = values.sort((a, b) => b - a);

        let topFive = 0;

        for (let i = 0; i < 5; i++) {
            topFive += values[i];
        }

        let avg = Math.floor(topFive / 5);

        res.push([Number(key), avg]);
    })

    return res;    
};