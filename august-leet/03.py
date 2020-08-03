class Solution:
    def isPalindrome(s) :
        justLetters = ''.join(e for e in s if e.isalnum()).lower();
        reverse = justLetters[::-1]
        return justLetters == reverse

"""
    Result: 92%
     
"""