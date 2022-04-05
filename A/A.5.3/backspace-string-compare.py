class Solution(object):
    def backspaceCompare(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        
        BACKSPACE = "#"
   
        def getText(letters):
            text = []
            for letter in letters:
                if letter == BACKSPACE:
                    if text:
                        text.pop()
                else:
                    text.append(letter)
            return text
        return getText(s) == getText(t)
        