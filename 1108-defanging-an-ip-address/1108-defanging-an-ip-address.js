/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let addyArr = address.split('');

    for (let i = 0; i < addyArr.length; i++) {
        if (addyArr[i] === '.') {
            addyArr[i] = '[.]';
        }
    }

    return addyArr.join('');
};
