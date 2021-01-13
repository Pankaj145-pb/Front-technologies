def search(arr, l, h, key):
    if l > h:
        return -1
    mid = (l + h) // 2
    if arr[mid] == key:
        return mid
    
    if arr[l] <= arr[mid]:
        if key >= arr[l] and arr[mid] > key:
            return search(arr, l, mid-1, key)
        return search(arr, mid+1, h, key)

    # if not sorted
    if key >= arr[mid] and key < arr[h]:
        return search(arr,mid+1, h, key)
    return search(arr, l, mid-1, key)


if __name__ == '__main__':
    arr = []
    key = 9
    n = int(input("Enter the number off elements "))
    for i in range(0, n):
        ele = int(input())
        arr.append(ele)
    i = search(arr, 0, n-1, key)

    if i != -1:
        print("index %d" % i)
    else:
        print("key not found")