# https://leetcode.com/problems/valid-mountain-array/

class Solution(object):
    def validMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        
        n = len(arr)
        index = 0
        
        # walk up
        while index + 1 < n and arr[index + 1] > arr[index]:
            index += 1
            
        if index == 0 or index == (n-1):
            return False
                
        # walk down
        while index + 1 < n and arr[index + 1] < arr[index]:
            index += 1
        
        return (index + 1) == n
            