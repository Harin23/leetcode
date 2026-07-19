/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length === 0 || strs.length === 1) return [strs];

    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const count = Array(26).fill(0);
        const str = strs[i];
        for (let j = 0; j < str.length; j++) {
            const letterIndex = str.charCodeAt(j) - 97;
            count[letterIndex]++;
        }
        const key=count.join("-");
        map.set(key, (map.get(key) ?? []).concat(str));
    }
    return [...map.values()];
};
