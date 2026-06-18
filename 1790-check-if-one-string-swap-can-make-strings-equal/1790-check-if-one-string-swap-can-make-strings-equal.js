/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let charArr = new Array(26).fill(0);
    let swap = 0;

    for (let i = 0; i < s1.length; i++) {
        let temp = s1[i].charCodeAt() - "a".charCodeAt();
        charArr[temp]++;
    }

    for (let i = 0; i < s2.length; i++) {
        let temp = s2[i].charCodeAt() - "a".charCodeAt();
        
        if (charArr[temp] === 0) {
            return false;
        } else {
            charArr[temp]--;
        }

        if (s1[i] !== s2[i]) {
            swap++;
        }

        if (swap > 2) {
            return false;
        }
    }

    return true;
};