x = int(input())

count = 0
array = []
for i in range(64):
    total = sum(array)
    if total == x:
        break
    elif total < x:
        array.append(array[i] // 2)
    else:
        array[i] //= 2

print(len(array))