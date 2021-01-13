from collections import Counter
def common(str1, str2):
    dict1 = Counter(str1)
    dict2 = Counter(str2)

    common_dict = dict1 & dict2

    if len(common_dict) == 0:
        return (-1)

    commonChars = list(common_dict.elements())

    commonChars = sorted(commonChars)
    print("".join(commonChars))


if __name__ == '__main__':
    str1 = "geeks"
    str2 = "forgeeks"

    common(str1, str2)

