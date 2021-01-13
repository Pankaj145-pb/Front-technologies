def reverseArr(arr, start, end):
    while(start < end):
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start = start + 1
        end = end - 1


def leftRotateArray(arr, d):
    n = len(arr)
    reverseArr(arr, 0, d-1)
    reverseArr(arr, d, n-1)
    reverseArr(arr, 0, n-1)

def printArray(arr):
    for i in range(0, len(arr)):
        print(arr[i], end=" ")


if __name__ == '__main__':
    arr = []
    d = 2
    n = int(input("enter the number of element "))
    for i in range(0, n):
        ele = int(input())
        arr.append(ele)
    leftRotateArray(arr, d)

    printArray(arr)
    