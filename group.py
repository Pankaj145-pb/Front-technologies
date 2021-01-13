from itertools import groupby
def group(str1):
    result = []
    for (key, group) in groupby(str1):
        result.append(key)

    print("". join(result))

if __name__ == '__main__':
    str1 = 'aaaabbbcccddd'
    group(str1)