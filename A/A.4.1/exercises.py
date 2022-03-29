# Hacker Rank Warmup Problems
# https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

# Simple Array Sum
def simpleArraySum(ar):
    counter = 0
    for a in ar:
        counter += a
    return counter


# Comparing Triplets
def compareTriplets(a, b):
    n = len(a)
    alice_points = 0
    bob_points = 0
    for i in range(n):
        if a[i] > b[i]:
            alice_points += 1
        elif a[i] < b[i]:
            bob_points += 1
        
    return [alice_points, bob_points]

# A Very Big Sum
def aVeryBigSum(ar):
    return sum(ar)

# Diagonal Difference
def diagonalDifference(arr):
    n = len(arr)
    diag1 = 0
    diag2 = 0
    for i in range(n):
        diag1 += arr[i][i]
        diag2 += arr[i][n - i - 1]
        
    return abs(diag1 - diag2)

# Plus Minus
def plusMinus(arr):
    n = len(arr)
    pos_count = 0.0
    neg_count = 0.0
    zero_count = 0.0
    
    for num in arr:
        if num > 0:
            pos_count += 1
        elif num < 0:
            neg_count += 1
        else:
            zero_count += 1
            
    print(pos_count / n)
    print(neg_count / n)
    print(zero_count / n)

# Staircase
def staircase(n):
    for i in range(1, n+1):
        print((" "*(n-i)) + ("#"*i))

# Mini Max Sum
def miniMaxSum(arr):
    total = sum(arr)
    low = min(arr)
    high = max(arr)
    print("{} {}".format(total - high, total - low))

# Birthday Cake Candles
def birthdayCakeCandles(candles):
    highest_length = 0
    highest_count = 0
    
    for candle in candles:
        if candle > highest_length:
            highest_length = candle
            highest_count = 0
        
        if candle == highest_length:
            highest_count += 1
    
    return highest_count
