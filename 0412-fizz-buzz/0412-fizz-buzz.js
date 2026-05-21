/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    if (n <= 0) {
        return [];
    }

    let res = fizzBuzz(n - 1);

    let answer = '';

    if (n % 3 === 0) {
        answer += 'Fizz';
    }
    if (n % 5 === 0) {
        answer += 'Buzz';
    }
    
    res.push(answer || n.toString());

    return res;
};