from pprint import pprint

def bubble_sort(arr):
    # Traverse through the array
    for i in range(len(arr)):
        # loop to compare array elements
        for j in range(0, len(arr) - i - 1):

            # compare two adjacent elements
            # change > to < to sort in descending order
            if arr[j] > arr[j + 1]:
                # swapping elements if elements
                # are not in the intended order
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr

A = [64, 25, 12, 22, 11]
result = bubble_sort(A)
print ("Sorted array")
pprint( result)