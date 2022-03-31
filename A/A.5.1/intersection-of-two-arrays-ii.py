class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        # O(n^2)
        result = []
        
        for num in nums1: # O(n)
            if num in nums2: # O(n)
                nums2.remove(num) # O(n)
                result.append(num) # O(1)
                
        return result
        