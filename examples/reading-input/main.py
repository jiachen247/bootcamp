import sys

def parseTC():
  [N, M] = sys.stdin.readline().split(" ")
  N = int(N)
  M = int(M)
  grid = []
  for _ in range(N):
    line = sys.stdin.readline().strip().split(" ")
    line = map(line, int)
    grid.append(line)
  
  return N, M, grid


T = int(sys.stdin.readline())

for i in range(T):
  N, M, grid = parseTC()
  # solve tc here
