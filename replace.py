def replaceChar(str, c1, c2):
    newChar = map(lambda x:x if (x!= c1 and x!= c2) else c1 if (x ==c2) else c2, str)

    print("".join(newChar))


if __name__ == '__main__':
    str = 'geeksForgeeks'
    c1 = 'e'
    c2 = 'f'
    replaceChar(str, c1, c2)