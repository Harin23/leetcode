/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    const freq = Array(26).fill(0);

    for(let i=0; i < s.length; i++){
        freq[s.charCodeAt(i)-97] += 1;
        freq[t.charCodeAt(i)-97] -= 1;
    }

    return !freq.some(item => item !== 0);
};
