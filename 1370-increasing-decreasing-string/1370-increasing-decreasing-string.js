/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const count = new Array(26).fill(0);

    for (const char of s) {
        count[char.charCodeAt(0) - 97]++;
    }

    let res = "";

    while (res.length < s.length) {

        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) {
                res += String.fromCharCode(i + 97);
                count[i]--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            if (count[i] > 0) {
                res += String.fromCharCode(i + 97);
                count[i]--;
            }
        }
    }

    return res;
};