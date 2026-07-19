/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for(let i=0; i < nums.length; i++){
        if(seen.has(nums[i])) return true;
        seen.add(nums[i]);
    }
    return false;
};


//---------solution 2:------
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     return (new Set(nums)).size !== nums.length
// };
