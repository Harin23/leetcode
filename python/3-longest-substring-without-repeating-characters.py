class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        last_seen = {}
        get = last_seen.get
        longest = left = 0
        length = len(s)
        for right, char in enumerate(s):
            prev = get(char, -1)
            if prev >= left:
                left = prev + 1
            elif right - left >= longest:
                longest = right - left + 1
            if length - left <= longest:
                return longest
            last_seen[char] = right
        return longest
