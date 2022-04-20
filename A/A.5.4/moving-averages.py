#################################
# Rocket Academy Queue Problems #
#################################

# The following exercises represent a queue with a deque.
# The start of the deque is the front of the queue.
# We can enqueue with .append(element), and dequeue with .popleft().
from collections import deque

######################
# 3: Moving Averages #
######################

# Problem statement:
# Given a valid window size, move through the given list and
# return a new list of moving averages. A moving average is
# the average of all the numbers in the given window. For example,
# for a list [1, 2, 3] and window size of 2, a resultant list
# of moving averages would be [1.5, 2.5].
#
# The following examples illustrate the number of elements in the
# resultant list.
# 6 items, window_size=2, loop 5 times
# 6 items, window_size=3, loop 4 times
# 6 items, window_size=6, loop 1 time
# 3 items, window_size=2, loop 2 times
# 4 items, window_size=2, loop 3 times
# 5 items, window_size=2, loop 4 times
# N items, window_size=2, loop N-1 times
# N items, window_size=X, loop N-(X-1) times

# Helper function to calculate the mean (average) of
# numbers in a given list.
def mean(l):
  return sum(l)/len(l)

def moving_averages(l, window_size):
  window = deque()
  result = []

  for num in l:
    if len(window) < window_size - 1:
      window.append(num)
    else:
      window.popleft()
      window.append(num)
      result.append(mean(window))

  result.append(mean(window))
  return result
  
print(moving_averages([0,1,2,3,4,5], 1)) # [0.0, 1.0, 2.0, 3.0, 4.0, 5.0]
print(moving_averages([0,1,2,3,4,5], 2)) # [0.5, 1.5, 2.5, 3.5, 4.5]
print(moving_averages([0,1,2,3,4,5], 3)) # [1.0, 2.0, 3.0, 4.0]
print(moving_averages([0,1,2,3,4,5], 4)) # [1.5, 2.5, 3.5]



