/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    
    let arrS = sentence.split(" ");

    for (let i = 0; i < arrS.length; i++) {
        let word = arrS[i].split("");
        let firstChar = word[0].toLowerCase();

        if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
            word.push("ma");
        } else {
            word.push(word[0]);
            word.splice(0, 1);
            word.push("ma")
        }

        let countA = i + 1;

        while (countA > 0) {
            word.push("a");
            countA--;
        }
        
        arrS[i] = word.join("");
    }

    return arrS.join(" ");
};