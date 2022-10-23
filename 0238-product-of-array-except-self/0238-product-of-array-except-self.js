/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     var results = []
     
//   Fill results in with the left product of everything at i 
     results[0] = 1;
     var leftP = 1;
     for(let i = 1; i < nums.length; i++) {
         leftP = leftP * nums[i-1]
         results[i] = leftP
     }
    
//     Multiply each element of results with the right product of everything at i
     results[nums.length - 1] = results.at(-1) * 1
     var rightP = 1
     for(let i = nums.length - 2; i > -1; i--) {
         rightP = rightP * nums[i + 1]
         results[i] *= rightP
     }
    
    return results
};