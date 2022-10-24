/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
    var lower = s.toLowerCase()
    lower = lower.replace(/[^A-Za-z0-9]/g, '');
    var left = 0
    var right = lower.length - 1
    console.log(lower)
    while(right > left) {
        if (lower[right] == lower[left]) {
            right--
            left++
        } else {
            return false
        }
    }
    
    return true
};

