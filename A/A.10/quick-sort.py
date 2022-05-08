from pprint import pprint

A = [64, 25, 12, 22, 11]
def partition(array, begin_idx, end_idx):

    # the least found value location
    # so we know where in the subarray
    # to place the pivot
    least_idx = begin_idx

    # pivot is at the end, find where it goes in the array
    pivot = array[end_idx]

    # find where in the array to put the pivot
    # j looks through the array
    for j in range(begin_idx, end_idx):

        # current element is less than pivot
        if array[j] <= pivot:
            # swap j with this least item
            array[least_idx], array[j] =  array[j], array[least_idx]
            # advance least_idx
            least_idx = least_idx + 1
            

    # put the pivot one ahead of the last least item found
    array[least_idx],array[end_idx] = array[end_idx],array[least_idx]

    # return an index that hasn't been sorted
    # yet, the index to the left of the location where we put the pivot
    return (least_idx)

def quick_sort(array, begin_idx, end_idx):
    # we moved the end past the beginning
    # or the beginning past the end
    if begin_idx >= end_idx:
        return

    # find the next pivot
    pivot = partition(array, begin_idx, end_idx)

    # recurse left
    quick_sort(array, begin_idx, pivot-1)

    # recurse right
    quick_sort(array, pivot+1, end_idx)

quick_sort(A,0,len(A) - 1)
print ("Sorted array")
print(A)