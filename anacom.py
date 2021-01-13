from collections import Counter

def removeChar(str1, str2):
    dict1 = Counter(str1)
    dict2 = Counter(str2)

    keys1 = dict1.keys()
    keys2 = dict2.keys()

    count1 = len(keys1)
    count2 = len(keys2)

    set1 = set(keys1)

    commonKeys = len(set1.intersection(keys2))

    if commonKeys == 0:
        return -1
    else:
        return max(count1, count2) - commonKeys


if __name__ == '__main__':
    str1 = 'ahe'
    str2 = 'clhbae'
    print(removeChar(str1, str2))