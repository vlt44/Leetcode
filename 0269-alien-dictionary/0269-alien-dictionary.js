/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let queue = [];
    let graph = new Map();
    let indegree = new Map();
    const result = [];

    for (let word of words) {
        for (let char of word) {
            if (!graph.has(char)) {
                graph.set(char, []);
            }

            if (!indegree.has(char)) {
                indegree.set(char, 0);
            }
        }
    }

    for (let i = 1; i < words.length; i++) {
        let word1 = words[i - 1];
        let word2 = words[i];
        let length = Math.min(word1.length, word2.length);

        if(word2.length < word1.length && word1.startsWith(word2)) {
            return '';
        }

        for (let j = 0; j < length; j++) {
            if (word1[j] !== word2[j]) {
                graph.get(word1[j]).push(word2[j]);
                indegree.set(word2[j], indegree.get(word2[j]) + 1);
                break;
            }
        }
    }
    
    for (let c of indegree) {
        if (c[1] === 0) {
            queue.push(c[0]);
        }
    }

    while (queue.length) {
        let vertex = queue.shift();

        for (let char of graph.get(vertex)) {
            let val = indegree.get(char) - 1;
            indegree.set(char, val);

            if (val === 0) {
                queue.push(char);
            }
        }
        
        result.push(vertex);
    }

    return result.length === indegree.size ? result.join('') : '';
};