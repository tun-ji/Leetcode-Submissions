/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {}
    
    nums.forEach((num) => {
        map[num] = (map[num] + 1) || 1
    })
        
    var sort = Object.entries(map).sort((a,b) => b[1] - a[1])
    
    var result = [];
    
    var i = 0
    while(i < k) {
        result.push(sort[i][0])
        i++
    }
    
    return result
};
