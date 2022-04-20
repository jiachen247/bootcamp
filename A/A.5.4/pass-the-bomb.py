#################################
# Rocket Academy Queue Problems #
#################################

# The following exercises represent a queue with a deque.
# The start of the deque is the front of the queue.
# We can enqueue with .append(element), and dequeue with .popleft().
from collections import deque

####################
# 1: Pass The Bomb #
####################

# Problem statement:
# Given a list of names and a bomb timer, return the name of the last
# person standing. The bomb is passed around iteratively, and the bomb
# timer decreases by 1 at each iteration. When the bomb timer reaches 0,
# the bomb explodes and the person at the current index is eliminated.
# After each explosion, the bomb timer is reset and the bomb starts
# with the person at the next iteration.

def play(names, timer):
  # Convert input array to deque
  names = deque(names)
  original_timer_val = timer
  
  while len(names) > 1:
    first_person = names.popleft()

    if timer > 0:
      timer -= 1
      names.append(first_person)
    else:
      timer = original_timer_val

  return names.pop()

print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 1)) # "Coco"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 2)) # "Dede"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 3)) # "Ally"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 4)) # "Beth"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 5)) # "Dede"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 6)) # "Dede"