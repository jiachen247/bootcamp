# https://leetcode.com/problems/richest-customer-wealth/

class Solution(object):
    # O(NM)
    def maximumWealth(self, accounts): # N is # of accounts, M is # of individual bank accounts
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        
        # O(M)
        def calc_wealth(account):
            return sum(account)
        
        max_wealth = 0
        
        # O(NM)
        for account in accounts:
            max_wealth = max(max_wealth, calc_wealth(account))
            
        return max_wealth