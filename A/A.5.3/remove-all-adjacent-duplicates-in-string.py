class Solution(object):
    def removeDuplicates(self, letters):
        """
        :type s: str
        :rtype: str
        """
        
        stack = []
        
        for letter in letters:
            if not stack: # if stack is empty
                stack.append(letter)
            elif letter == stack[-1]:
                stack.pop()
            else:
                stack.append(letter)
                
        return "".join(stack)
                    