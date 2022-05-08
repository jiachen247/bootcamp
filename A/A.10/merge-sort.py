from pprint import pprint

A = [64, 25, 12, 22, 11]

def merge_sort(arr):
    if len(arr) > 1:

         # Finding the middle of the array
        mid = len(arr) // 2

        # Dividing the array elements
        L = arr[:mid]

        # into 2 halves
        R = arr[mid:]

        # Sorting the first half
        leftResult = merge_sort(L)

        # Sorting the second half
        rightResult = merge_sort(R)

        # merge the results of the recursive merge_sort calls
        return merge(leftResult,rightResult)
    else:
        return arr

def merge(L,R):

    # create an empty array
    arr = [None] * (len(L) + len(R))

    i = j = k = 0

    # Copy data to temp arrays L[] and R[]
    while i < len(L) and j < len(R):
        if L[i] < R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # Checking if any element was left
    while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1

    while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1

    return arr

result = merge_sort(A)
print ("Sorted array")
pprint( result)