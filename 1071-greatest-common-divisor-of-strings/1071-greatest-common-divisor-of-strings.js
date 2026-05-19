/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
    if ((str1 + str2) !== (str2 + str1)){
        return ""
    }
    
    let len1 = str1.length;
    let len2 = str2.length;

    while(len2 != 0) {
        let tmp = len2;
        len2 = len1 % len2;
        len1 = tmp;
    }

    return str1.substring(0, len1)

};