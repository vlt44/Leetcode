/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return s.split('').every((char, i) => {
    return char === s[s.length - 1 - i];
  });
};