/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = 0;
    let map = {};

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "b": map[text[i]] = (map[text[i]] | 0) + 1;
            break;

            case "a": map[text[i]] = (map[text[i]] | 0) + 1;
            break;
            
            case "l": map[text[i]] = (map[text[i]] | 0) + 1;
            break;
            
            case "o": map[text[i]] = (map[text[i]] | 0) + 1;
            break;
            
            case "n": map[text[i]] = (map[text[i]] | 0) + 1;
            break;
        }
    }

    while (map["b"] >= 1 && map["a"] >= 1 && map["l"] >= 2 && map["o"] >= 2 && map["n"] >= 1) {
        count++;
        map["b"]--;
        map["a"]--;
        map["l"]-=2;
        map["o"]-=2;
        map["n"]--;
    }

    return count;
};