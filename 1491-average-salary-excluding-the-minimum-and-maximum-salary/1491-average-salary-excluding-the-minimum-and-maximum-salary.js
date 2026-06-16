/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let total = 0;

    for (let i = 0; i < salary.length; i++) {
        if (salary[i] !== max && salary[i] !== min) {
            total += salary[i];
        }
    }

    return total / (salary.length -  2);
};