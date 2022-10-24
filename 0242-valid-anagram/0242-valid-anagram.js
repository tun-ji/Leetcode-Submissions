/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    var map = {}
    
    for(let i =0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] + 1) || 1
    }
    console.log(map)
    for(let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]] = map[t[i]] - 1
        } else {
            return false
        }
    }
    console.log(map)
    return true
};