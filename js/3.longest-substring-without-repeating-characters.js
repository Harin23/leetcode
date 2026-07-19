/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map;
    let longest = 0, left = 0;

    for(let right = 0; right < s.length; right ++){
        char = s.charCodeAt(right);

        if(map.has(char) && map.get(char) >= left) left = map.get(char) + 1;

        map.set(char, right);

        const windowSize = right - left + 1;
        if(windowSize > longest) longest = windowSize;
    }

    return longest;
};
