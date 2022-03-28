# https://leetcode.com/problems/richest-customer-wealth/

class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        
        def calc_wealth(account):
            return sum(account)
        
        max_wealth = 0
        
        for account in accounts:
            max_wealth = max(max_wealth, calc_wealth(account))
            
        return max_wealth