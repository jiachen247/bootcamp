from pprint import pprint

def insertion_sort(arr):
    # Traverse through the array starting with the 2nd element
    for i in range(1, len(arr)):

        # set the current element as key
        key = arr[i]

        # look backwards through the array
        # move every value forward by one until it finds
        # a value smaller than key
        j = i-1
        while j >= 0 and key < arr[j] :
                # move j ahead one
                arr[j + 1] = arr[j]
                j -= 1
        # put key in the space we found using the loop
        arr[j + 1] = key

    return arr

A = [64, 25, 12, 22, 11]

[1, 3, 7, 8,| 10]
result = insertion_sort(A)
print ("Sorted array")
pprint(result)
