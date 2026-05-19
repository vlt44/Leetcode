/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
var mergeAlternately = function(word1, word2) {
  let word1Arr = word1.split('');
  let word2Arr = word2.split('');

  let maxLength = Math.max(word1Arr.length, word2Arr.length);
  let newArr = [];

    for (let i = 0; i < maxLength; i++){
        newArr.push(word1Arr[i])
        newArr.push(word2Arr[i])
    }
    newArr = newArr.join("");

   return newArr;
};