/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let lowptr = 0;
    let highptr = s.length;
    let size = s.length + 1;
    let output = new Array(size);

    for (let i = 0; i < size; i++) {
        if (s[i] === "I") {
            output[i] = lowptr;
            lowptr++;
        } else {
            output[i] = highptr;
            highptr--;
        }
    }

    return output;
};