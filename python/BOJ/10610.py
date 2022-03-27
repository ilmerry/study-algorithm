array = list(map(int, input()))
array.sort(reverse=True)

if sum(array) % 3 != 0 or 0 not in array:
    print(-1)
else:
    print(''.join(map(str, array)))