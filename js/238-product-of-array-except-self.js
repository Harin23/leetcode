/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;
    const res = Array(len);

    let prefix = 1;
    for (let i = 0; i < len; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = len - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res;
};
