/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - (seen.get(nums[i] ?? (i + k + 1))) <= k) return true;
        seen.set(nums[i], i);
    }
    return false
};
