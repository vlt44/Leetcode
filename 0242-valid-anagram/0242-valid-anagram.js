/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    function cleanStr(str) {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }

    return cleanStr(s) === cleanStr(t);
};