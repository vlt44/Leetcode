/**
 * @param {string}
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelBank = 'aeiouAEIOU';
    let vowelArr = [];
    let finalword = [];

    for(let i = 0; i < s.length; i++) {
        if(vowelBank.includes(s[i])){
            vowelArr.push(s[i])
        }
        finalword.push(s[i]);
    }

    for(let i = 0; i < finalword.length; i++){
        if(vowelBank.includes(finalword[i])) {
            finalword[i] = vowelArr.pop()
        }
    }

    return finalword.join('');
};