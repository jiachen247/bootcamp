# https://leetcode.com/problems/sort-array-by-parity/

class Solution(object):
    def sortArrayByParity(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(nums)
        i = 0
        j = n - 1
        
        while i < j:
            num = nums[i]
            
            if num % 2 == 0:
                # even
                i += 1
            else:
                # odd
                nums[i] = nums[j]
                nums[j] = num
                j -= 1
                
        return nums