def initials(str):
    if len(str) == 0:
        return 
    print(str[0].upper())
    for i in range(1, len(str)):
        if str[i] == ' ':
            print(str[i+1].upper())


if __name__ == '__main__':
    str = input("enter a string")
    initials(str)