from pprint import pprint

def selection_sort(arr):
    # traverse through all array elements
    for outer_idx in range(len(arr)):

        # given current point in array
        # mark that value as min
        min_idx = outer_idx

        # start inner loop
        # loop starting at outer_idx to end
        for i in range(outer_idx+1, len(arr)):

            # if a lower value is found
            if arr[min_idx] > arr[i]:
                min_idx = i

        # loop set a min value
        # swap the found minimum element with
        # the first element
        arr[outer_idx], arr[min_idx] = arr[min_idx], arr[outer_idx]

    return arr

A = [64, 25, 12, 22, 11]
result = selection_sort(A)
print ("Sorted array")
pprint( result)
