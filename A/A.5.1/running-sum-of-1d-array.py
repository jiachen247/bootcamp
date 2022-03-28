# https://leetcode.com/problems/running-sum-of-1d-array/

class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
    
        counter = 0
        result = []
        
        for num in nums:
            counter += num
            result.append(counter)
            
        return result
        