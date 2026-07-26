//beats 88%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const j = map.get(nums[i]);
        if (j !== undefined) return [j, i];
        map.set(target - nums[i], i);
    }
};



//shit solution: beats 7% needs to be improved
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hmap = {}
    for(i=0; i<nums.length; i++){
        hmap[nums[i]]=i;
    };
    for(i=0; i<nums.length; i++){
        if(hmap.hasOwnProperty(target - nums[i]) && i != hmap[target - nums[i]]){
            return [i, hmap[target - nums[i]]];
        };
    };
};
