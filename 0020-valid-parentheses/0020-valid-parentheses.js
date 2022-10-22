/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    
    var key = {
        '(':')',
        '[':']',
        '{':'}'
    }
    
    var stack = []
      
    for (let i = 0; i < s.length; i++) {
        if (s[i] in key) {
            stack.push(key[s[i]])    
        } else {
            if (stack.at(-1) == s[i]) {
                stack.pop()
            } else {
                return false
            }
        }
    
    }
    
    return stack.length == 0? true:false
};

